(ns shriek.db
  (:use clojure.core
        korma.db
        korma.core
        carica.core)
  (:require
   [clojure.edn :as edn]
   [clojure.java.io :as io]
   [noir.util.crypt :as c]
   [clj-time.core :as t]
   [clj-time.format :as tf]
   [clj-time.local :as tl]
   [markdown.core :as md]
   ))

(defdb db (mysql { :db (str (config :db :name) "?useUnicode=true&characterEncoding=utf8&tcpKeepAlive=true&autoReconnect=true")
                   :host (config :db :host)
                   :user (config :db :user)
                   :password (config :db :pass)
                   }))

(defentity users
  (prepare (fn [v]
             (-> v
                 (update-in [:state] pr-str)
                 (update-in [:role] pr-str))
             ))
  (transform (fn [v]
               (-> v
                   (update-in [:state] edn/read-string)
                   (update-in [:role] edn/read-string))
               ))
  )

(defentity cards
  (prepare (fn [v] (dissoc v :html)))
  (transform (fn [v] (assoc v :html (md/md-to-html-string (:body v)))))
  )

(defentity stacks
  (has-many cards)
  )
(defentity boards
  (has-many stacks))

(defn list2map [coll]
  (reduce (fn [a x] (assoc a (:id x) x)) {} coll))

(defn get-user
  [email]
  (first (select users (where {:email email})))
  )

(defn create-user
  [f]
  (if-not (get-user (:email f))
    (insert users
            (values [(update-in f [:password] c/encrypt)]))
    nil))

(defn delete-user
  [id]
  (delete users (where {:id id})))

(defn create-board [b]
  (insert boards (values [b])))

(defn delete-board [id]
  (delete boards (where {:id id})))

(defn get-board [name]
  (first (select boards (where {:name name}))))

(defn list-boards []
  (list2map (select boards)))

(defn add-stack-to-id [board_id stack]
  (insert stacks (values [(assoc stack :boards_id board_id)])))

(defn add-stack-to-name [board_name stack]
  (let [board_id (first (select boards (where {:name board_name})
                                (fields :id)
                                ))]
    (add-stack-to-id (:id board_id) stack)))

(defn delete-stack [id]
  (delete stacks (where {:id id})))

(defn list-stacks [id]
  (list2map (select stacks (where {:boards_id id}))))

(defn list-cards
  [id]
  (list2map (select cards (where {:stacks_id id}))))

(defn board-data [id]
  (let [stacks* (select stacks (where {:boards_id id}))]
    (list2map (map #(assoc % :cards (list-cards (:id %))) stacks*))
    ))

(defn add-card-to-id [stack_id f]
  (insert cards (values (assoc f :stacks_id stack_id)))
  )

(defn add-card-to-name [stack_name f]
  (let [stack_id (first (select stacks (where {:name stack_name})
                                (fields :id)))]
    (insert cards (values (assoc f :stacks_id (:id stack_id))))))

(derive :db/admin :db/user)

(defn check-user
  "Search user in DB and return map with user's data
  For now just sets her password to her name"
  [email pass]
  (if (and email pass)
    (if-let [user (first (select users (where {:email email})))]
      (if (c/compare pass (:password user))
        (dissoc user :password)
        nil))
    nil)
  )

(defn populate
  "Populate db woth some demo users"
  []
  (delete users)
  (create-user {:email "tchu@tchu.ru"
                :password "123"
                :fullname "Евгений Чуприянов"
                :role :db/admin
                :state {:context :app/boards :param 0}})
  (create-user {:email "demo@demo.org"
                :password "demo"
                :fullname "Случайный прохожий"
                :role :db/user
                :state {:context :app/boards :param 0}})
  (delete boards)
  (create-board {:name "Птицы" :description "Первая досочка"})
  (create-board {:name "Змеи" :description "Четвертая досочка"})
  (create-board {:name "Животные" :description "Вторая досочка"})
  (create-board {:name "Рыбы" :description "Третья досочка"})

  (delete stacks)
  (add-stack-to-name "Птицы" {:name "Лесные" :description "Птицы, живущме в лесу"})
  (add-stack-to-name "Птицы" {:name "Городские" :description "Птицы, живущме в городе"})
  (add-stack-to-name "Птицы" {:name "Водоплавающие" :description "Птицы, которын умеют плавать"})
  (add-stack-to-name "Животные" {:name "Хищники" :description "Кровожадныу звери"})
  (add-stack-to-name "Животные" {:name "Травоядные" :description "Милые няшки"})
  (add-stack-to-name "Рыбы" {:name "Морские" :description "Океанские рыбы"})
  (add-stack-to-name "Рыбы" {:name "Речные" :description "Пресноводные рыбы"})
  (add-stack-to-name "Рыбы" {:name "Озерные" :description "Вкусгяшки"})
  (delete cards)
  (let [user1 (:id (get-user "tchu@tchu.ru"))
        user2 (:id (get-user "demo@demo.org"))
        ]
    (add-card-to-name "Лесные" {:title "Дятел" :users_id user1 :body "#Кисо куку!"})
    (add-card-to-name "Лесные" {:title "Глухарь" :users_id user2})
    (add-card-to-name "Лесные" {:title "Тетерев" :users_id user1})
    (add-card-to-name "Городские" {:title "Ворона" :users_id user1})
    (add-card-to-name "Городские" {:title "Воробей" :users_id user2})
    (add-card-to-name "Водоплавающие" {:title "Утка" :users_id user1})
    (add-card-to-name "Водоплавающие" {:title "Гусь" :users_id user2})
    (add-card-to-name "Водоплавающие" {:title "Лебедь" :users_id user1})
    (add-card-to-name "Морские" {:title "Акула" :users_id user1})
    (add-card-to-name "Морские" {:title "Тунец" :users_id user2})
    (add-card-to-name "Морские" {:title "Сардина" :users_id user1})
    (add-card-to-name "Речные" {:title "Хариус" :users_id user2})
    (add-card-to-name "Речные" {:title "Таймень" :users_id user1})
    (add-card-to-name "Озерные" {:title "Карась" :users_id user2})
    (add-card-to-name "Озерные" {:title "Карп" :users_id user1})
    )
  )
(comment
  (def crds (select cards
                    (with stacks)
                    (fields :id :title :body :users_id :stacks_id :modified)
                    (where (and (= :stacks_id :stacks.id)
                                (= :stacks.boards_id 59)))))

  (def crds1 (reduce (fn [a x] (assoc a (:id x) x)) {} crds))

  (populate)

  (vals crds1)

  (list-boards)
  (list-stacks 59)
  (first (board-data 62))
  (list-cards 145)

  (md/md-to-html-string "#Киса куку!")

  (try (create-board {:name "112" :description "test2"})
    (catch Exception e {:status :shriek/failure :message (.getMessage e)})
  )
)
