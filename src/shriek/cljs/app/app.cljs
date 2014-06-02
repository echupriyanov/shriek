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

(em/defsnippet card-new-element "/html/site.html" "#new-card" [stack_id]
               ".new-card" (ef/set-attr :onclick
                                        (str "shriek.app.card_new(" stack_id ")")))

(em/defsnippet card-edit-form "/html/site.html" ".card-edit-form" [{:keys [stacks_id title body id] :as c}]
               "#card-edit-title" (ef/set-attr :value title)
               "#card-edit-body" (ef/content body)
               "#cef-save-btn" (ef/set-attr :onclick (if id
                                                       (str "shriek.app.try_card_save(" id ")")
                                                       (str "shriek.app.try_card_create(" stacks_id ")"))))

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
               "#sl-edit-btn" (ef/set-attr :onclick (str "shriek.app.stack_edit_form(" id ")"))
               "#cards" (ef/content (map card-element (vals cards)))
               "#cards" (ef/append (card-new-element id))
               )


(em/defsnippet stack-new-element "/html/site.html" "#stack-new" [board_id]
               "#stack-new" (ef/set-attr :onclick (str "shriek.app.stack_new_form(" board_id ")")))

(em/defsnippet stack-add-form "/html/site.html" "#stack-add-form" [])

(em/defsnippet stack-list "/html/site.html" "#stack-list" [])

(em/defsnippet article-view "html/site.html" ".article-view" [{:keys [id title html] :as card}]
               "#article-title" (ef/content title)
               "#article-body" (ef/content html)
               "#av-edit-btn" (ef/set-attr :onclick (str "shriek.app.card_edit_edn('" (pr-str card) "')"))
               )

(defn ^:export card-view [v]
  (let [card (reader/read-string v)]
    (logf "Trying to render %s" card)
    (ef/at "#main-content" (ef/content (article-view card)))))

(defn ^:export card-new [stacks_id]
  (ef/at "#main-content" (ef/content (card-edit-form {:stacks_id stacks_id})))
  )

(defn ^:export card-edit-edn [card-edn]
  (let [card (reader/read-string card-edn)]
    (logf "card-edit-edn editing card: %s" card)
    (ef/at "#main-content" (ef/content (card-edit-form card))))
  )

(defn ^:export stack-new-form [board_id]
    (ef/at "#main-content" (ef/content (stack-add-form)))
    (ef/at "#saf-save-btn" (ef/set-attr :onclick
                                        (str "shriek.app.try_create_stack(" board_id ")")))
    )

(defn ^:export stack-edit-form [stack_id]
  (let [stack (get (:data @boarddata) stack_id)]
    (logf "Editing stack: %s" stack)
    (ef/at "#main-content" (ef/content (stack-add-form)))
    (ef/at ".slist-title" (ef/content "Редактирование папки"))
    (ef/at "#stack-add-name" (ef/set-attr :value (:name stack)))
    (ef/at "#stack-add-description" (ef/content (:description stack)))
    (ef/at "#saf-save-btn" (ef/do->
                              (ef/content "Сохранить")
                              (ef/set-attr :onclick
                                        (str "shriek.app.try_save_stack(" stack_id ")")))
    )
))

(:name (get (:data @boarddata) 193))

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
  (ef/at "#stack-list" (ef/do-> (ef/content (map stack-element data))
                                (ef/append (stack-new-element (:boards_id (first data)))))
         ))

(defn snt-get-user-info []
  (chsk-send! [:shriek/users :getinfo]))

(defn snt-get-board-list []
  (chsk-send! [:shriek/boards :list]))

(defn snt-get-stack-list [id]
  (chsk-send! [:shriek/boards [:getdata id]]))

(defn ^:export stack-view
  ([] (stack-view (pr-str (get @boardmap (:id @boarddata)))))
  ([board-edn]
   (let [board (reader/read-string board-edn)]
     (ef/at "#main-content" (ef/do-> (ef/content (slist-header board))
                                     (ef/append (stack-list))))
     (reset! state {:pos :board :id (:id board)})
     (snt-get-stack-list (:id board)))))

(defn ^:export board-view []
  (ef/at "#main-content"
         (ef/do-> (ef/content (blist-header))
                  (ef/append (board-list))
                  ))
  (snt-get-board-list)
  )

(defn card-saved [resp]
  (logf "Reply to save card: %s" resp)
  (stack-view)
  )

(defn ^:export try-card-save [id]
  (let [card {:title (ef/from "#card-edit-title" (ef/read-form-input))
              :body (ef/from "#card-edit-body" (ef/read-form-input))
              :id id}]
    (POST "/app/card/update"
          {:params {:card card}
           :handler card-saved
           :error-handler err-handler
           })
    )
  )

(defn ^:export try-card-create [stacks_id]
  (let [card {:title (ef/from "#card-edit-title" (ef/read-form-input))
              :body (ef/from "#card-edit-body" (ef/read-form-input))
              :stacks_id stacks_id}]
    (logf "Trying tp create card: %s" card)
    (POST "/app/card/add"
          {:params {:card card}
           :handler card-saved
           :error-handler err-handler
           }
          ))
  )

(defn stack-saved [resp]
  (logf "stack create/edit returned: %s" resp)
  (if (:result resp) (do (flush-error)(stack-view))
    (log-error (:message resp)))
  )

(defn ^:export try-save-stack [stack_id]
  (let [stack {:name (ef/from "#stack-add-name" (ef/read-form-input))
               :description (ef/from "#stack-add-description" (ef/read-form-input))
               :id stack_id}]
    (POST "/app/stack/update"
          {
          :params {:stack stack}
          :handler stack-saved
          :error-handler err-handler}
          )
    )
  )

(defn ^:export try-create-stack [board_id]
  (let [stack {:name (ef/from "#stack-add-name" (ef/read-form-input))
               :description (ef/from "#stack-add-description" (ef/read-form-input))
               :boards_id board_id}]
    (POST "/app/stack/add"
          {
          :params {:stack stack}
          :handler stack-saved
          :error-handler err-handler}
          )
    )
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
