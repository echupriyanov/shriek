(ns shriek.routes.home
  (:use compojure.core
        )
  (:require [shriek.views.layout :as layout]
            [shriek.util :as util]
            [noir.response :refer [edn]]))

(defn home-page []
  (layout/render
    "home.html" {:content (util/md->html "/md/docs.md")}))

(defn about-page []
  (layout/render "about.html"))

;; (defn response [data & [status]]
;;   {:status (or status 200)
;;    :headers {"Content-Type" "application/edn"}
;;    :body (pr-str data)})

(defn process-signup [u p]
  (edn {:user u :status "Logged in!"}))

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/edn" [] (edn {:foo 1 :bar 2}))
  (POST "/signup" [user pass] (process-signup user pass))
  (GET "/about" [] (about-page)))
