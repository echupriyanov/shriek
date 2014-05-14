create database shriek character set 'utf8';
grant all on shriek.* to shriek@localhost identified by 'shriek';

create table shriek.cards(
  id int auto_increment primary key,
  title varchar(1024),
  body text,
  users_id int,
  stacks_id int,
  modified timestamp);

create table shriek.stacks(
  id int auto_increment primary key,
  name varchar(255) unique,
  description varchar(1024),
  boards_id int
  );

create table shriek.boards(
  id int auto_increment primary key,
  name varchar(255) unique,
  description varchar(1024)
  );

create table shriek.users(
  id int auto_increment primary key,
  email varchar(255) not null unique,
  password varchar(1024) not null,
  fullname varchar(1024) not null,
  role varchar(255) not null,
  state varchar(255) not null);
