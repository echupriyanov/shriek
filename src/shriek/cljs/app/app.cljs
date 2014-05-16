(ns shriek.app
  (:require [enfocus.core :as ef]
            [cljs.reader :as reader]
            [ajax.core :refer [GET POST]]
            [cljs.core.match] ; Optional, useful
            [cljs.core.async :as async :refer (<! >! put! chan)]
            [taoensso.encore :as encore :refer (logf)]
            [taoensso.sente :as sente :refer (cb-success?)]
            [chord.client :refer [ws-ch]]
            )
  (:require-macros [enfocus.macros :as em]
                   [cljs.core.match.macros :refer (match)]
                   [cljs.core.async.macros :as asyncm :refer (go go-loop)]
                   ))

(let [{:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket! "/chsk" ; Note the same URL as before
                                  {:type :ajax})]
  (def chsk       chsk)
  (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state) ; Watchable, read-only atom
  )

(defn- event-handler [[id data :as ev] _]
  (logf "Event: %s" ev)
  (match [id data]
         ;; TODO Match your events here <...>
         [:chsk/state {:first-open? true}]
         (logf "Channel socket successfully established!")
         [:chsk/state new-state] (logf "Chsk state change: %s" new-state)
         [:chsk/recv  payload]   (logf "Push event from server: %s" payload)
         :else (logf "Unmatched event: %s" ev)))

(defonce chsk-router
  (sente/start-chsk-router-loop! event-handler ch-chsk))

(declare start)

(def userinfo (atom {}))

(defn ^:export logout-ok [r]
  (aset js/window.location "href" "/login")
  )

(defn ^:export logout-not-ok [{:keys [status status-text] :as r}]
  (.log js/console (str "Logout failed: " status " " status-text
                        "reponse" (pr-str r))))

(defn ^:export try-process-logout []
  (.log js/console "logout pressed!")
  (GET (str "/logout")
       { :params {}
         :handler logout-ok
         :error-handler logout-not-ok}
       ))

(defn ^:export error-denied [resp]
  (.log js/console (str "Got respnose "(pr-str resp)))
  (when (= (:status resp) 401)
    (aset js/window.location "href" "/login")))

(defn ^:export try-denied []
  (POST "/app/bad"
        {:params {}
         :handler error-denied
         :error-handler error-denied})
  )

(defn err-handler [resp]
  (.log js/console (str ("Shit happend! reply: " (pr-str resp)))))

(defn update-userinfo [resp]
  (reset! userinfo resp)
  (ef/at "#username" (ef/content (:fullname @userinfo))))


(defn try-get-userinfo []
  (GET "/app/user/info"
       { :handler update-userinfo
         :error-handler err-handler}))

(em/defsnippet board-add-form "/html/site.html" ".board-add-form" [])

(em/defsnippet board-element "/html/site.html" "#board" [{:keys [name description] :as v}]
               "#name" (ef/content name)
               "#description" (ef/content description)
               "#board" (ef/set-attr :onclick
                                     (str "shriek.app.stack_view('" (pr-str v)"')")))

(em/defsnippet blist-header "/html/site.html" ".blist-header" [])
(em/defsnippet board-list "/html/site.html" "#board-list" [])
(em/defsnippet board-new "html/site.html" "#board-new" [])

(em/defsnippet slist-header "/html/site.html" ".slist-header" [{:keys [name description] :as b}]
               ".slist-title" (ef/content name)
               "#refresh" (ef/set-attr :onclick (str "shriek.app.stack_view('" (pr-str b)"')"))
               ".slist-desc" (ef/content description))

(em/defsnippet stack-element "/html/site.html" "#stack" [{:keys [name id]}]
               "#stack-title" (ef/content name))

(em/defsnippet stack-list "/html/site.html" "#stack-list" [])

(defn ^:export board-add []
  (ef/at "#main-content" (ef/content (board-add-form))))

(defn board-created []
  (start))

(defn ^:export try-create-board []
  (.log js/console (ef/from "#board-add-name" (ef/read-form-input)))
  (.log js/console (ef/from "#board-add-description" (ef/read-form-input)))
  (POST "/app/board/add"
        {:params {:name (ef/from "#board-add-name" (ef/read-form-input))
                  :description (ef/from "#board-add-description" (ef/read-form-input))}
         :handler board-created
         :error-handler err-handler}))

(defn boards [data]
  (ef/at "#board-list" (ef/do-> (ef/content (map board-element data))
                                (ef/append (board-new)))
         ))

(defn stacks [data]
  (ef/at "#stack-list" (ef/content (map stack-element data))))

(defn try-board-list []
  (GET "/app/board/list"
       {:param {}
        :handler boards
        :error-handler err-handler})
  )

(defn try-stack-list [id]
  (GET (str "/app/board/" id "list")
       {:param {}
        :handler stacks
        :error-handler err-handler})
  )

(defn ^:export board-view []
  (ef/at "#main-content"
         (ef/do-> (ef/content (blist-header))
                  (ef/append (board-list))
                  )
         (try-board-list)))


(defn ^:export stack-view [board-edn]
  (let [board (reader/read-string board-edn)]
    (ef/at "#main-content" (ef/do-> (ef/content (slist-header board))
                                    (ef/append (stack-list)))
           (try-stack-list (:id board)))))

(defn receive-msgs [server-ch]
  ;; every time we get a message from the server, add it to our list
  (go-loop []
           (when-let [msg (<! server-ch)]
             (logf "Received msg: %s" (pr-str msg))
             (recur))))

(defn send-hi [server-ch]
  (go
   (>! server-ch {:text "hi"})))

(defn ws-test [url]
  (go
   (let [{:keys [ws-channel error]} (<! (ws-ch url
                                               {:format :json-kw}))]
     (if error (logf "Error: %s" (pr-str error))
       (do
         (receive-msgs ws-channel)
         (send-hi ws-channel)))
     )))

(defn ws-url []
  (let [proto (aget js/window.location "protocol")
        port (aget js/window.location "port")
        host (aget js/window.location "hostname")
        wsproto (if (= proto "https:") "wss://" "ws://")
        wsurl (str wsproto host ":" port "/ws")]
    (logf "WS URL: %s" wsurl)
    wsurl
    ))

(defn ^:export start []
;;  (ws-test (ws-url))
  (try-get-userinfo)
  (board-view))

;; (set! (.-onload js/window) start)
(set! (.-onload js/window) #(em/wait-for-load (start)))
