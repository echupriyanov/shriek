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

(def userinfo (atom {}))
(def state (atom {:pos :top}))
(def boardmap (atom {}))
(def boarddata (atom {}))
(def stackmap (atom {}))
(def cardmap (atom {}))
(def errors (atom []))
(def initialized? (atom false))

(declare start)
(declare refresh-page)
(declare update-userinfo)

(defn show-error []
  (ef/at "#sh-errors" (ef/do-> (ef/content (ef/html (map (fn [x] [:p x]) @errors)))
                               (ef/set-attr :style "display: block;"))))

(defn log-error
  [e]
  (swap! errors #(conj % (pr-str e)))
  (show-error)
  )

(defn- process-event [[id data :as payload]]
  (match [id data]
         [:shriek/userinfo m] (update-userinfo m)
         [:shriek/boards m] (do (reset! boardmap m)
                              (refresh-page))
         [:shriek/boards-data m] (do (reset! boarddata m)
                                   (refresh-page))
         [:shriek/stacks m] (do (reset! stackmap m)
                              (refresh-page)
                              (logf "New stacks: %s" @stackmap))
         :else (logf "Unknown data from server: %s" (pr-str payload))
         ))

(defn- event-handler [[id data :as ev] _]
  (logf "Event: %s" ev)
  (log-error ev)
  (match [id data]
         ;; TODO Match your events here <...>
         [:chsk/state {:first-open? true}] (do
                                             (logf "Channel socket successfully established!")
                                             (start))
         [:chsk/state new-state] (logf "Chsk state change: %s" new-state)
         [:chsk/recv  payload]   (do (logf "Push event from server: %s" payload)
                                   (process-event payload))
         :else (logf "Unmatched event: %s" ev)))

(defn- init []
  (logf "Init called!")
  (let [{:keys [chsk ch-recv send-fn state]}
        (sente/make-channel-socket! "/chsk" ; Note the same URL as before
                                    {:type :ws})]
    (def chsk       chsk)
    (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
    (def chsk-send! send-fn) ; ChannelSocket's send API fn
    (def chsk-state state) ; Watchable, read-only atom
    )
  (defonce chsk-router
    (sente/start-chsk-router-loop! event-handler ch-chsk))
  (reset! initialized? true))

(defn ^:export logout-ok [r]
  (aset js/window.location "href" "/login")
  )

(defn ^:export logout-not-ok [{:keys [status status-text] :as r}]
  (.log js/console (str "Logout failed: " status " " status-text
                        "response" (pr-str r))))

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

(em/defsnippet card-element "/html/site.html" "#card" [{:keys [title]}]
               "#card" (ef/content (ef/html [:p title])))

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

(em/defsnippet stack-element "/html/site.html" "#stack" [{:keys [name id cards]}]
               "#title" (ef/content name)
               "#cards" (ef/content (map card-element (vals cards))))

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

(defn snt-get-user-info []
  (chsk-send! [:shriek/users :getinfo]))

(defn snt-get-board-list []
  (chsk-send! [:shriek/boards :list]))

(defn snt-get-stack-list [id]
  (chsk-send! [:shriek/boards [:getdata id]]))

(defn ^:export stack-view [board-edn]
  (let [board (reader/read-string board-edn)]
    (ef/at "#main-content" (ef/do-> (ef/content (slist-header board))
                                    (ef/append (stack-list))))
    (reset! state {:pos :board :id (:id board)})
    (snt-get-stack-list (:id board))))

(defn ^:export board-view []
  (ef/at "#main-content"
         (ef/do-> (ef/content (blist-header))
                  (ef/append (board-list))
                  ))
  (snt-get-board-list)
  )

(defn refresh-page []
  (if-not @initialized? (init))
  (ef/at "#main-content" (ef/content "Hi!"))
  (match [@state]
         [{:pos :top}] (do (logf "trying to render %s " (pr-str (vals @boardmap)))(boards (vals @boardmap)))
         [{:pos :board :id board_id}] (stacks (vals (:data @boarddata)))
         :else (logf "Unknown state: %s" (pr-str @state) ))
  )

(defn ^:export start []
  (snt-get-user-info)
  (reset! state {:pos :top})
  (board-view)
  )

;; (set! (.-onload js/window) start)
(set! (.-onload js/window) #(em/wait-for-load (refresh-page)))
