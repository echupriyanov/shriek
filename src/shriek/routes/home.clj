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

(let [{:keys [ch-recv send-fn ajax-post-fn ajax-get-or-ws-handshake-fn
              connected-uids]}
      (sente/make-channel-socket! {})]
  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv) ; ChannelSocket's receive channel
  (def chsk-send!                    send-fn) ; ChannelSocket's send API fn
  (def connected-uids                connected-uids) ; Watchable, read-only atom
  )

(defonce broadcaster
  (go-loop [i 0]
           (<! (async/timeout 10000))
           (println (format "Broadcasting server>client: %s" @connected-uids))
           (doseq [uid (:any @connected-uids)]
             (chsk-send! uid
                         [:some/broadcast
                          {:what-is-this "A broadcast pushed from server"
                           :how-often    "Every 10 seconds"
                           :to-whom uid
                           :i i}]))
           (recur (inc i))))

(defn home-page []
  (layout/render
   "home.html" {:content (util/md->html "/md/docs.md")}))

(defn about-page []
  (layout/render "about.html"))

(defn login-page []
  (layout/render "login.html"))

;; (defn response [data & [status]]
;;   {:status (or status 200)
;;    :headers {"Content-Type" "application/edn"}
;;    :body (pr-str data)})

(defn login [u p]
  (if-let [data (db/check-user u p)]
    (do (session/put! :user data)
      (assoc-in (resp/edn {:user u :status "OK!"}) [:session :uid] (:email data))
      )
    (resp/edn {:user u :status "Login failed!"})))

(defn logout []
  (session/remove! :user)
  (resp/redirect "/"))

(defn access-denied []
  (layout/render "access-denied.html"))

(defn app []
  (layout/render "app.html"))

(def-restricted-routes app-rroutes
  (GET "/" [] (app))
  (POST "/bad" [] (resp/status 401 (resp/edn "You are nasty SOB!")))
  (GET "/board/list" [] (resp/edn (db/list-boards)))
  (GET "/board/:id/list" [id] (resp/edn (db/list-stacks id)))
  (GET "/stack/:id/list" [id] (resp/edn (db/list-cards id)))
  (POST "/board/add" [name description] (resp/edn (db/create-board {:name name :description description})))
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
  (GET "/logout" [] (logout))
  (GET "/about" [] (about-page))
  )

(defn- logf [fmt & xs]
  (timbre/debug (apply format fmt xs)))

(defn- snt-send-user-info [])

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
           [:shriek/board :list] (?reply-fn (db/list-boards))
           [:shriek/board [:list board_id]] (?reply-fn (db/list-stacks board_id))
           ;; TODO: Match your events here, reply when appropriate <...>
           :else
           (do (logf "Unmatched event: %s" ev)
             (when-not (:dummy-reply-fn? (meta ?reply-fn))
               (?reply-fn {:umatched-event-as-echoed-from-from-server ev}))))))

