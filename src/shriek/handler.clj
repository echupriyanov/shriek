(ns shriek.handler
  (:use         compojure.handler
                ring.middleware.edn
                )
  (:require [compojure.core :refer [defroutes]]
            [shriek.routes.home :refer [home-routes app-rroutes ch-chsk]]
            [shriek.middleware :as middleware]
            [noir.util.middleware :refer [app-handler wrap-access-rules]]
            [noir.session :as session]
            [noir.response :as resp]
            [compojure.route :as route]
            [taoensso.timbre :as timbre]
            [taoensso.sente :as sente]
            [taoensso.timbre.appenders.rotor :as rotor]
            [clojure.core.match :as match :refer (match)]
            [clojure.core.async :as async :refer (<! <!! >! >!! put! chan go go-loop)]
            [selmer.parser :as parser]
            [ring.middleware.edn :refer [wrap-edn-params]]
            [ring.middleware.anti-forgery :as ring-anti-forgery]
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

(defn access-denied [req]
  (if (re-matches #"^/app/.*" (:uri req))
    (resp/status 401 (str "Denied!"))
    (resp/redirect "/login"))
  )

;; (def app (app-handler
;;           ;; add your application routes here
;;           [home-routes app-rroutes app-routes]
;;           ;; add custom middleware here
;;           ;;           :middleware [middleware/template-error-page
;;           ;;                        middleware/log-request
;;           ;;                        ring-anti-forgery/wrap-anti-forgery
;;           ;;                        ]
;;           ;; add access rules here
;;           :access-rules [{:on-fail access-denied
;;                           :rule user-access}]
;;           ;; serialize/deserialize the following data formats
;;           ;; available formats:
;;           ;; :json :json-kw :yaml :yaml-kw :edn :yaml-in-html
;;           :formats [:edn]))

(def app (app-handler
          [home-routes app-routes]
                :middleware [wrap-edn-params
                       middleware/template-error-page
                       middleware/log-request
                      ]
          :access-rules [{:on-fail access-denied
                          :rule user-access}]
          ))

;; (def app
;;   (-> home-routes
;;       (wrap-access-rules [{:on-fail access-denied
;;                            :rule user-access}])
;;       session/wrap-noir-session
;;       site
;;       wrap-edn-params))

(defn- logf [fmt & xs]
  (timbre/debug (apply format fmt xs)))

(defn- event-msg-handler
  [{:as ev-msg :keys [ring-req event ?reply-fn]} _]
  (let [session (:session ring-req)
        uid     (:uid session)
        [id data :as ev] event]

    (logf "Event: %s" ev)
    (match [id data]
           ;; TODO: Match your events here, reply when appropriate <...>
           :else
           (do (logf "Unmatched event: %s" ev)
             (when-not (:dummy-reply-fn? (meta ?reply-fn))
               (?reply-fn {:umatched-event-as-echoed-from-from-server ev}))))))

(defonce chsk-router
  (sente/start-chsk-router-loop! event-msg-handler ch-chsk))
