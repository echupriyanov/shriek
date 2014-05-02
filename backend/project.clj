(defproject shriek "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2173"]
                 [com.datomic/datomic-free "0.9.4718"]
;;                 [crypto-password "0.1.3"]
                 [compojure "1.1.6"]
                 [ring-server "0.3.1"]
                 [lib-noir "0.8.2"]
                 [markdown-clj "0.9.43"]
                 [com.taoensso/timbre "3.1.6"]
                 [com.taoensso/tower "2.0.2"]
                 [selmer "0.6.6"]
                 [environ "0.5.0"]
;;                 [ring/ring-jetty-adapter "1.3.0-beta1"]
;;                 [sonian/carica "1.1.0" :exclusions [[cheshire]]]
                 [fogus/ring-edn "0.2.0"]
                 [enfocus "2.1.0-SNAPSHOT"]
                 [cljs-ajax "0.2.3"]
                 ]
  :main ^:skip-aot shriek.core
  :repl-options {:init-ns shriek.repl}
  :target-path "target/%s"
  :plugins [[lein-ring "0.8.10"]
            [lein-cljsbuild "1.0.2"]
            [lein-environ "0.5.0"]]
  :ring {:handler shriek.handler/app
         :init    shriek.handler/init
         :destroy shriek.handler/destroy}
  :profiles {:uberjar {:aot :all}
             :production {:ring {:open-browser? false
                       :stacktraces?  false
                       :auto-reload?  false}}
             :dev {:dependencies [[ring-mock "0.1.5"]
                                  [ring/ring-devel "1.2.2"]]
                   :env {:dev true}}}
  :cljsbuild {
        :builds [
                  { :id "login"
                    :source-paths ["src/shriek/cljs/login"]
                    :compiler {
                      :output-to     "resources/public/js/login.js"
                      :output-dir    "resources/public/js/login"
                      :optimizations :none
                      :source-map    true
                  }}
                  { :id "app"
                    :source-paths ["src/shriek/cljs/app"]
                    :compiler {
                      :output-to     "resources/public/js/app.js"
                      :output-dir    "resources/public/js/app"
                      :optimizations :none
                      :source-map    true
                  }}
                 ]}
  :jvm-opts ^:replace ["-Xmx1g" "-server"]
  )
