(defproject shriek "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [compojure "1.1.6"]
                 [ring/ring-jetty-adapter "1.3.0-beta1"]
                 [sonian/carica "1.1.0" :exclusions [[cheshire]]]
                 [fogus/ring-edn "0.2.0"]]
  :main ^:skip-aot shriek.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}}
  :plugins [[lein-ring "0.8.10"]]
  :ring {:handler shriek.core/app}
  )
