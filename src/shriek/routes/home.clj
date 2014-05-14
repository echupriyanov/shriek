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

(defn login [u p]
  (if-let [data (db/check-user u p)]
    (do (session/put! :user data)
        (resp/edn {:user u :status "OK!"})
        )
    (resp/edn {:user u :status "Loggin failed!"})))

(defn logout []
  (session/remove! :user)
  (resp/redirect "/"))

(defn access-denied []
  (layout/render "access-denied.html"))

(defn app []
  (layout/render "app.html"))

(defn scraps []
  (layout/render "site.html"))

(def-restricted-routes app-rroutes
  (GET "/" [] (app))
  (POST "/bad" [] (resp/status 401 (resp/edn "You are nasty SOB!")))
  (GET "/board/list" [] (resp/edn (db/list-boards)))
  (GET "/board/:id/list" [id] (resp/edn (db/list-stacks id)))
  (GET "/stack/:id/list" [id] (resp/edn (db/list-cards id)))
  (POST "/board/add" [name description] (resp/edn (db/create-board {:name name :description description})))
  (GET "/user/info" [] (resp/edn (session/get :user)))
  )

(defroutes home-routes
  (GET "/" [] (login-page))
  (context "/app" [] app-rroutes)
  (GET "/sss" [] (scraps))
  (GET "/access-denied" [] (access-denied))
  (GET "/login" [] (login-page))
  (GET "/edn" [] (resp/edn {:foo 1 :bar 2}))
  (POST "/login" [user pass] (login user pass))
  (GET "/logout" [] (logout))
  (GET "/about" [] (about-page)))
