(ns shriek.login
  (:require [enfocus.core :as ef]
            [ajax.core :refer [GET POST]])
  (:require-macros [enfocus.macros :as em]))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "Something bad happened: " status " " status-text)))

(defn display-error [e]
  (ef/at "#login-errors" (ef/do-> (ef/content e)
                                  (ef/set-attr :style "display: block;"))))

(defn clear-messages []
  (ef/at "#login-errors" (ef/set-attr :style "display: none;"))
  (ef/at "#login-success" (ef/set-attr :style "display: none;"))
  )

(defn login-ok [r]
  (.log js/console (str "Login ok reponse " (pr-str r)))
  (if (= (:status r) :shriek/success) (do
                                        (ef/at "#login-success" (ef/do-> (ef/content "Login successful!")
                                                                         (ef/set-attr :style "display: block;")))
                                        (aset js/window.location "href" "/app"))
    (do
      (ef/at "#login-errors" (ef/do-> (ef/content "Login failed! Try again")
                                      (ef/set-attr :style "display: block;")))
      )
    ))

(defn login-not-ok [{:keys [status status-text] :as r}]
  (display-error (str "Login failed! Try again!" status-text))
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

(em/defsnippet form-signin "/html/site.html" ".form-signin" [])
(em/defsnippet form-register "/html/site.html" ".form-register" [])

(defn validate [{:keys [fullname email password password2] :as u}]
  (.log js/console (str "Validating " (pr-str u)))
  (if (and fullname email password password2)
    (if (= password password2) {:result true :user (dissoc u :password2)}
      {:result false :message "Пароли не совпадают!"})
    {:result false :message "Все поля должны быть заполнены!"})
  )

(defn register-ok [r]
  (if (:result r)
    (do
      (ef/at "#login-success" (ef/do-> (ef/content "Регистрация прошла успешно!")
                                       (ef/set-attr :style "display: block;")))
      (aset js/window.location "href" "/app"))
    (display-error (:message r)))
  )

(defn register-not-ok [{:keys [status status-text] :as r}]
  (display-error (str "Ошибка регистрации:" status-text))
  (.log js/console (str "registration request failed: " status " " status-text
                        "response" (pr-str r))))

(defn try-process-register [u]
  (POST "/register"
        { :params {:userinfo u}
          :handler register-ok
          :error-handler register-not-ok}
        ))

(defn ^:export try-register []
  (let [user {:fullname (ef/from "#reg-name"(ef/read-form-input))
              :email (ef/from "#reg-email"(ef/read-form-input))
              :password (ef/from "#reg-password1"(ef/read-form-input))
              :password2 (ef/from "#reg-password2"(ef/read-form-input))
              }
        v_user (validate user)]
    (clear-messages)
    (if (:result v_user) (try-process-register (:user v_user))
      (display-error (:message v_user)))))

(defn ^:export register []
  (clear-messages)
  (ef/at "#main-content" (ef/content (form-register))))

(defn ^:export start []
  (ef/at "#main-content" (ef/content (form-signin))))


;; (set! (.-onload js/window) start)
(set! (.-onload js/window) #(em/wait-for-load (start)))
