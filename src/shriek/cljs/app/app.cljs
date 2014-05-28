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

(let [{:keys [chsk ch-recv send-fn state] :as ws}
      (sente/make-channel-socket! "/chsk" ; Note the same URL as before
                                  {:type :ws})]
  (def chsk       chsk)
  (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state) ; Watchable, read-only atom
  )

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

(defn flush-error []
  (reset! errors [])
  (ef/at "#sh-errors" (ef/do-> (ef/content (ef/html [:p "No errors."]))
                               (ef/set-attr :style "display: none;"))))

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
         [:shriek/boards-add m] (do (swap! boardmap (fn [x y] (conj x y)) {{:id m} m})
                                  (refresh-page)
                                  (logf "Received board update: %s" m))
         :else (logf "Unknown data from server: %s" (pr-str payload))
         ))

(defn- event-handler [[id data :as ev] _]
  (logf "Event: %s" ev)
;;  (log-error ev)
  (match [id data]
         ;; TODO Match your events here <...>
         [:chsk/state {:first-open? true}] (do
                                             (logf "Channel socket successfully established!")
                                             (start))
         [:chsk/state new-state] (logf "Chsk state change: %s" new-state)
         [:chsk/recv  payload]   (do (logf "Push event from server: %s" payload)
                                   (process-event payload))
         :else (logf "Unmatched event: %s" ev)))

(defonce chsk-router
  (sente/start-chsk-router-loop! event-handler ch-chsk))

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

(defn err-handler [resp]
  (.log js/console (str "Shit happend! reply: " (pr-str resp))))


(defn update-userinfo [resp]
  (reset! userinfo resp)
  (ef/at "#username" (ef/content (:fullname @userinfo))))

(em/defsnippet card-element "/html/site.html" "#card" [{:keys [title] :as v}]
               "#card" (ef/content title)
               "#card" (ef/set-attr :onclick
                                    (str "shriek.app.card_view('" (pr-str v)"')")))

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

(em/defsnippet article-view "html/site.html" ".article-view" [{:keys [id title html]}]
               "#article-title" (ef/content title)
               "#article-body" (ef/content html))

(defn ^:export card-view [v]
  (let [card (reader/read-string v)]
    (logf "Trying to render %s" card)
    (ef/at "#main-content" (ef/content (article-view card)))))

;;(get (:cards (get (:data @boarddata) 145)) 86)

(defn- board-exists? [name]
  (some #(= name (:name %)) (vals @boardmap))
  )

(defn ^:export board-add []
  (ef/at "#main-content" (ef/content (board-add-form))))

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

(defn board-created []
  (board-view))

(defn create-board-reply [r]
  (logf "Got reply to create board: %s " r)
  )

(defn ^:export try-create-board []
  (logf "Name of board: %s" (ef/from "#board-add-name" (ef/read-form-input)))
  (logf "Board description: %s"(ef/from "#board-add-description" (ef/read-form-input)))
  (POST "/app/board/add"
        {:params {:name (ef/from "#board-add-name" (ef/read-form-input))
                  :description (ef/from "#board-add-description" (ef/read-form-input))}
         :handler board-created
         :error-handler err-handler}
        ))

(defn refresh-page []
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

;; (chsk-send! [:shriek/boards [:add {:name "669" :description "asfksdfjsh"}]] 10000 create-board-reply)

;; (set! (.-onload js/window) start)
;;(set! (.-onload js/window) #(em/wait-for-load (init)))
