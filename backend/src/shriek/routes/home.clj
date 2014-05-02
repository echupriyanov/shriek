(ns shriek.routes.home
  (:use compojure.core
        noir.util.route
        )
  (:require [shriek.views.layout :as layout]
            [shriek.util :as util]
            [shriek.db :as db]
            [noir.session :as session]
            [noir.response :as resp]))

(defn home-page []
  (layout/render
    "home.html" {:content (util/md->html "/md/docs.md")}))

(defn about-page []
  (layout/render "about.html"))

(defn login-page []
  (layout/render "login.html"))

;; (defn response [data & [status]]
;;   {:status (or status 200)
;;    :headers {"Content-Type" "application/edn"}
;;    :body (pr-str data)})

(defn process-signup [u p]
  (if-let [data (db/check-user u p)]
    (do (session/put! :user data)
        (resp/status 200 (pr-str {:user u :status "Logged in!"})))
    (resp/status 200 (pr-str {:user u :status "Loggin failed!"}))))

(defn signoff []
  (session/remove! :user)
  (resp/status 200 "Logoff successfull!"))

(defn access-denied []
  (layout/render "access-denied.html"))

(defn app []
  (layout/render "app.html"))

(def-restricted-routes app-rroutes
  (GET "/app" [] (app)))

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/access-denied" [] (access-denied))
;;  (GET "/app" [] (app))
  (GET "/login" [] (login-page))
  (GET "/edn" [] (edn {:foo 1 :bar 2}))
  (POST "/signup" [user pass] (process-signup user pass))
  (GET "/signoff" [] (signoff))
  (GET "/about" [] (about-page)))
