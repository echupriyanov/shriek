(ns shriek.login
  (:require [enfocus.core :as ef]
            [ajax.core :refer [GET POST]])
  (:require-macros [enfocus.macros :as em]))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "Something bad happened: " status " " status-text)))

(defn ^:export login-ok [r]
  (.log js/console (str "Login ok reponse " (pr-str r)))
  (aset js/window.location "href" "/app")
  )

(defn ^:export login-not-ok [{:keys [status status-text] :as r}]
  (.log js/console (str "Login not ok: " status " " status-text
                        "reponse" (pr-str r))))

(defn ^:export try-process-login []
  (.log js/console "signup pressed!")
  (POST (str "/login")
        { :params {:user (ef/from "#email" (ef/read-form-input))
                   :pass (ef/from "#password" (ef/read-form-input))}
          :handler login-ok
          :error-handler login-not-ok}

  ))

(defn start []
(ef/at "#main-content" (ef/content "Страничка входа!")))


;; (set! (.-onload js/window) start)
(set! (.-onload js/window) #(em/wait-for-load (start)))
