(ns shriek.core
  (:require [enfocus.core :as ef])
  (:require-macros [enfocus.macros :as em]))

(defn start []
  (ef/at ".container" (ef/content "Враг не пройдет!")))


;; (set! (.-onload js/window) start)
(set! (.-onload js/window) #(em/wait-for-load (start)))

