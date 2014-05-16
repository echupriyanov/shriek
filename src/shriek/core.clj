(ns shriek.core
  (:gen-class)
  (:use shriek.handler
        [org.httpkit.server :only [run-server]]
        [ring.middleware file-info file]))

(defn -main [& args]
  (let [port (if (empty? args)
               3000
               (Integer/parseInt (first args)))
        ]
    (println "Starting the network server on port" port)
    (run-server (-> app
                    (wrap-file "resources")
                    wrap-file-info) {:port port})
    ))
