(ns shriek.app
  (:require [enfocus.core :as ef]
            [cljs.reader :as reader]
            [cljs.core :refer [pr-str str]]
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
 (.log js/console (str "Shit happend! reply: " (pr-str resp))))


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
               "#title" (ef/content name))

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
  (logf "Adding stacks %s" (pr-str data))
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

(defn snt-stack-list [repl]
  (if (sente/cb-success? repl)
    (stacks repl)
    (err-handler repl))
  )

(defn snt-get-stack-list [id]
  (chsk-send! [:shriek/board [:list id]] 5000 snt-stack-list))

(defn ^:export stack-view [board-edn]
  (let [board (reader/read-string board-edn)]
    (ef/at "#main-content" (ef/do-> (ef/content (slist-header board))
                                    (ef/append (stack-list))))
           (snt-get-stack-list (:id board))))

(defn snt-user-info [repl]
  (if (sente/cb-success? repl)
    (update-userinfo repl)
    (err-handler repl))
  )

(defn snt-board-list [repl]
  (if (sente/cb-success? repl)
    (boards repl)
    (err-handler repl))
  )

(defn snt-get-user-info []
  (chsk-send! [:shriek/user :getinfo] 5000 snt-user-info))

(defn snt-get-board-list []
  (chsk-send! [:shriek/board :list] 5000 snt-board-list))

(defn ^:export board-view []
  (ef/at "#main-content"
         (ef/do-> (ef/content (blist-header))
                  (ef/append (board-list))
                  ))
  (snt-get-board-list)
  )

(defn ^:export start []
  (err-handler {:user 23434})
  (snt-get-user-info)
  ;;  (try-get-userinfo)
  (board-view)
  )

;; (set! (.-onload js/window) start)
(set! (.-onload js/window) #(em/wait-for-load (start)))
(comment
  (sente/chsk-reconnect! chsk)
  (cljs.core/pr-str 123)
  (err-handler "343")
  )
