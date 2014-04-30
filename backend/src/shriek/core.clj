(ns shriek.core
  (:require [compojure.route :as route]
            [clojure.java.io :as io])
  (:use compojure.core
        compojure.handler
        ring.middleware.edn
        carica.core)
  (:gen-class))

(require '[ring.adapter.jetty :as r])

(defn response [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/edn"}
   :body (pr-str data)})

(defn process-signup [u p]
  (response {:user u :status "Logged in!"}))

(defroutes compojure-handler
  (GET "/" [] (slurp (io/resource "public/html/index.html")))
  (POST "/signup" [user pass] (process-signup user pass))
  (GET "/req" request (str request))
  (route/resources "/")
  (route/files "/" {:root (config :external-resources)})
  (route/not-found "Not found!"))

(def app
  (-> compojure-handler
      site
      wrap-edn-params))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (r/run-jetty app {:port 3000 :host "localhost"}))
