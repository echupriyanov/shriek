(ns shriek.app
  (:require [enfocus.core :as ef]
            [cljs.reader :as reader]
            [ajax.core :refer [GET POST]])
  (:require-macros [enfocus.macros :as em]))

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

(em/defsnippet board-element "/html/site.html" "#board" [{:keys [name title] :as v}]
               "#name" (ef/content name)
               "#title" (ef/content title)
               "#board" (ef/set-attr :onclick
                                     (str "shriek.app.stack_view('" (pr-str v)"')")))

(em/defsnippet blist-header "/html/site.html" ".blist-header" [])
(em/defsnippet board-list "/html/site.html" "#board-list" [])

(em/defsnippet slist-header "/html/site.html" ".slist-header" [{:keys [name title]}]
               ".slist-title" (ef/content name)
               ".slist-desc" (ef/content title))

(em/defsnippet stack-element "/html/site.html" "#stack" [{:keys [title id]}]
               "#stack-title" (ef/content title))

(em/defsnippet stack-list "/html/site.html" "#stack-list" [])

(defn err-handler [resp]
  (.log js/console (str ("Shit happend! reply: " (pr-str resp)))))

(defn boards [data]
  (ef/at "#board-list" (ef/content (map board-element data))
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
                  (ef/append (board-list)))
         (try-board-list)))


(defn ^:export stack-view [board-edn]
  (let [board (reader/read-string board-edn)]
    (ef/at "#main-content" (ef/do-> (ef/content (slist-header board))
                                    (ef/append (stack-list)))
           (try-stack-list (:id board)))))

(defn start []
  (board-view))

;; (set! (.-onload js/window) start)
(set! (.-onload js/window) #(em/wait-for-load (start)))
