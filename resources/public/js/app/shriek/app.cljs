(ns shriek.app
  (:require [enfocus.core :as ef]
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


(defn start []
(ef/at "#main-content" (ef/content "А тут живут драконы!")))


;; (set! (.-onload js/window) start)
(set! (.-onload js/window) #(em/wait-for-load (start)))
