(ns shriek.repl
  (:gen-class)
  (:use shriek.handler
        [org.httpkit.server :only [run-server]]
        [ring.middleware file-info file])
  (:require [ring.middleware.reload :as reload]))

(defonce server (atom nil))

(defn get-handler []
  ;; #'app expands to (var app) so that when we reload our code,
  ;; the server is forced to re-resolve the symbol in the var
  ;; rather than having its own copy. When the root binding
  ;; changes, the server picks it up without having to restart.
  (-> #'app
      ; Makes static assets in $PROJECT_DIR/resources/public/ available.
      (reload/wrap-reload)
      (wrap-file "resources")
      ; Content-Type, Content-Length, and Last Modified headers for files in body
      (wrap-file-info)))

(defn start-server
  "used for starting the server in development mode from REPL"
  [& [port]]
  (let [port (or port 3000)]
    (reset! server (run-server (get-handler) {:port port}))
    (println (str "You can view the site at http://localhost:" port))))

(defn stop-server []
  (@server :timeout 100)
  (reset! server nil))
