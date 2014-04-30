(ns shriek.db
  (:require
    [datomic.api :as d]
    [clojure.edn :as edn]
    [clojure.java.io :as io]))

;;(require '[crypto.password.pbkdf2 :as password])

;;(def encrypted (password/encrypt "foobar"))

;; (def db-url "datomic:free://localhost:4334/shriek")

;; (d/create-database db-url)
;; (def conn (d/connect db-url))
;; (defn db [] (d/db conn))

;; (def schema [
;;   {
;;     :db/ident          :person/name
;;     :db/valueType      :db.type/string
;;     :db/cardinality    :db.cardinality/one
;;     :db/id             (d/tempid :db.part/db)
;;     :db.install/_attribute    :db.part/db
;;   }
;;   {
;;     :db/ident          :person/login
;;     :db/unique         :db.unique/identity
;;     :db/valueType      :db.type/string
;;     :db/cardinality    :db.cardinality/one
;;     :db/id             (d/tempid :db.part/db)
;;     :db.install/_attribute    :db.part/db
;;   }
;;   {
;;     :db/ident          :person/passhash
;;     :db/valueType      :db.type/string
;;     :db/cardinality    :db.cardinality/one
;;     :db/id             (d/tempid :db.part/db)
;;     :db.install/_attribute    :db.part/db
;;   }
;; ])

;; (defn reset []
;;   (d/release conn)
;;   (d/delete-database db-url)
;;   (d/create-database db-url)
;;   (alter-var-root #'conn (constantly (d/connect db-url)))
;;   @(d/transact conn schema))



