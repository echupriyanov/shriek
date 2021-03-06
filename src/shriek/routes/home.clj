(ns shriek.routes.home
  (:use compojure.core
        noir.util.route
        )
  (:require [shriek.views.layout :as layout]
            [shriek.util :as util]
            [shriek.db :as db]
            [taoensso.timbre :as timbre]
            [noir.session :as session]
            [taoensso.sente :as sente]
            [clojure.core.match :as match :refer [match]]
            [compojure.route :as route]
            [clojure.core.async :as async :refer [<! >! put! close! go-loop]]
            [noir.response :as resp]))

(defn- logf [fmt & xs]
  (timbre/debug (apply format fmt xs)))

(let [{:keys [ch-recv send-fn ajax-post-fn ajax-get-or-ws-handshake-fn
              connected-uids]}
      (sente/make-channel-socket! {})]
  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv) ; ChannelSocket's receive channel
  (def chsk-send!                    send-fn) ; ChannelSocket's send API fn
  (def connected-uids                connected-uids) ; Watchable, read-only atom
  )

;; (defonce broadcaster
;;   (go-loop [i 0]
;;            (<! (async/timeout 10000))
;;            (println (format "Broadcasting server>client: %s" @connected-uids))
;;            (doseq [uid (:any @connected-uids)]
;;              (chsk-send! uid
;;                          [:some/broadcast
;;                           {:what-is-this "A broadcast pushed from server"
;;                            :how-often    "Every 10 seconds"
;;                            :to-whom uid
;;                            :i i}]))
;;            (recur (inc i))))

(defn home-page []
  (layout/render
   "home.html" {:content (util/md->html "/md/docs.md")}))

(defn about-page []
  (layout/render "about.html"))

(defn login-page []
  (layout/render "login.html"))

(defn app []
  (layout/render "app.html"))

(defn genuuid []
  (str (java.util.UUID/randomUUID)))

(defn login [u p]
  (if-let [data (db/check-user u p)]
    (do (session/put! :user data)
      (assoc-in (resp/edn {:user u :status :shriek/success}) [:session :uid] (genuuid))
      )
    (resp/edn {:user u :status :shriek/failure})))

(defn logout []
  (session/remove! :user)
  (resp/redirect "/"))

(defn register [u]
  (if (db/get-user (:email u))
    (resp/edn {:result false :message "Такой пользователь уже существует!"})
    (do (db/create-user (assoc u :role :db/user :state {:pos :top}))
      (session/put! :user (dissoc (db/get-user (:email u)) :password))
      (assoc-in (resp/edn {:result true}) [:session :uid] (genuuid)))))

(defn access-denied []
  (layout/render "access-denied.html"))

(defn bcast-data [d]
  (doseq [uid (:any @connected-uids)]
    (logf "Sending updates to %s data %s" uid d)
    (chsk-send! uid d))
  )

(defn try-create-board [b]
  (try (do
         (db/create-board b)
         (bcast-data [:shriek/boards-add (db/get-board (:name b))])
         [{:result :shriek/ok}])
    (catch Exception e [{:result :shriek/failure :message (.getMessage e)}])
    )
  )

(defn try-create-card [c]
  (try (do
         (db/add-card-to-id (:stacks_id c) c)
         {:result true})
    (catch Exception e {:result false :message (.getMessage e)})
    ))

(defn try-update-card [c]
  (try (do
         (db/update-card c)
         {:result true})
    (catch Exception e {:result false :message (.getMessage e)})
    ))

(defn try-create-stack [s]
  (try (do
         (db/add-stack-to-id (:boards_id s) s)
         {:result true})
    (catch Exception e {:result false :message (.getMessage e)})
    ))

(defn try-update-stack [s]
  (try (do
         (db/update-stack s)
         {:result true})
    (catch Exception e {:result false :message (.getMessage e)})
    ))

(def-restricted-routes app-rroutes
  (GET "/" [] (app))
  (GET "/board/list" [] (resp/edn (db/list-boards)))
  (GET "/board/:id/list" [id] (resp/edn (db/list-stacks id)))
  (GET "/stack/:id/list" [id] (resp/edn (db/list-cards id)))
  (POST "/board/add" [name description] (resp/edn (try-create-board {:name name :description description})))
  (POST "/card/add" [card] (resp/edn (try-create-card card)))
  (POST "/card/update" [card] (resp/edn (try-update-card card)))
  (POST "/stack/add" [stack] (resp/edn (try-create-stack stack)))
  (POST "/stack/update" [stack] (resp/edn (try-update-stack stack)))
  (GET "/user/info" [] (resp/edn (session/get :user)))
  )

(def-restricted-routes ws-routes
  (GET  "/chsk" req (ring-ajax-get-or-ws-handshake req))
  (POST "/chsk" req (ring-ajax-post                req))
  )

(defroutes home-routes
  (GET "/" [] (login-page))
  (context "/app" [] app-rroutes)
  (GET "/access-denied" [] (access-denied))
  (GET "/login" [] (login-page))
  (GET "/edn" [] (resp/edn {:foo 1 :bar 2}))
  (POST "/login" [user pass] (login user pass))
  (POST "/register" [userinfo] (register userinfo))
  (GET "/logout" [] (logout))
  (GET "/about" [] (about-page))
  )

(defn- snt-send-boards-list [uuid]
  (chsk-send! uuid [:shriek/boards (db/list-boards)]))

(defn- snt-send-stacks-list [uuid board_id]
  (chsk-send! uuid [:shriek/stacks (db/list-stacks board_id)]))

(defn- snt-send-boards-data [uuid board_id]
  (chsk-send! uuid [:shriek/boards-data {:id board_id :data (db/board-data board_id)}]))

(defn event-msg-handler
  [{:as ev-msg :keys [ring-req event ?reply-fn]} _]
  (let [session (:session ring-req)
        uid     (:uid session)
        noir-session (:noir session)
        [id data :as ev] event]

    (logf "Event: %s" ev)
    (match [id data]
           [:shriek/user :getinfo] (do (logf "Got request for userinfo. Sending %s" (pr-str (:user noir-session)))
                                     (?reply-fn (:user noir-session))
                                     )
           [:shriek/users :getinfo] (chsk-send! uid [:shriek/userinfo (:user noir-session)])
           [:shriek/boards :list] (snt-send-boards-list uid)
           [:shriek/boards [:getdata board_id]] (snt-send-boards-data uid board_id)
           [:shriek/stacks [:list board_id]] (snt-send-stacks-list uid board_id)
           [:shriek/boards [:add board-data]] (try-create-board)
           ;;(?reply-fn (try-create-board board-data))
           ;;           [:shriek/boards [:add board]] (resp/edn (db/create-board {:name name :description description}))
           :else
           (do (logf "Unmatched event: %s" ev)
             (when-not (:dummy-reply-fn? (meta ?reply-fn))
               (?reply-fn {:umatched-event-as-echoed-from-from-server ev}))))))

