(ns shriek.app
  (:require [enfocus.core :as ef]
            [cljs.reader :as reader]
            [ajax.core :refer [GET POST]])
  (:require-macros [enfocus.macros :as em]))

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

(defn ^:export start []
  (try-get-userinfo)
  (board-view))

;; (set! (.-onload js/window) start)
(set! (.-onload js/window) #(em/wait-for-load (start)))
