(ns shriek.handler
  (:require [compojure.core :refer [defroutes]]
            [shriek.routes.home :refer [home-routes app-rroutes]]
            [shriek.middleware :as middleware]
            [noir.util.middleware :refer [app-handler]]
            [noir.session :as session]
            [compojure.route :as route]
            [taoensso.timbre :as timbre]
            [taoensso.timbre.appenders.rotor :as rotor]
            [selmer.parser :as parser]
            [ring.middleware.edn :refer [wrap-edn-params]]
            [environ.core :refer [env]]))

(defroutes app-routes
  (route/resources "/")
  (route/not-found "Not Found"))

(defn init
  "init will be called once when
   app is deployed as a servlet on
   an app server such as Tomcat
   put any initialization code here"
  []
  (timbre/set-config!
    [:appenders :rotor]
    {:min-level :info
     :enabled? true
     :async? false ; should be always false for rotor
     :max-message-per-msecs nil
     :fn rotor/appender-fn})

  (timbre/set-config!
    [:shared-appender-config :rotor]
    {:path "shtiek.log" :max-size (* 512 1024) :backlog 10})

  (if (env :dev) (parser/cache-off!))
  (timbre/info "Shriek started successfully"))

(defn destroy
  "destroy will be called when your application
   shuts down, put any clean up code here"
  []
  (timbre/info "Shriek is shutting down..."))


(defn user-access [req]
  (if-let [user (session/get :user)]
    (isa? (:role user) :db/user)
    nil))

(def app (app-handler
           ;; add your application routes here
           [home-routes app-rroutes app-routes]
           ;; add custom middleware here
           :middleware [middleware/template-error-page
                        middleware/log-request]
;;                        wrap-edn-params]
           ;; add access rules here
           :access-rules [{:redirect "/access-denied"
                :rule user-access}]
           ;; serialize/deserialize the following data formats
           ;; available formats:
           ;; :json :json-kw :yaml :yaml-kw :edn :yaml-in-html
           :formats [:json-kw :edn]))
