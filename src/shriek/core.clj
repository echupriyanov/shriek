(ns shriek.core
  (:gen-class))

(require 'ring.adapter.jetty)

(defn handler [request]
{:status 200
   :headers {"Content-Type" "text/plain;charset=utf-8"}
   :body "Превед, Медвед!"})

(def app handler)

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))
