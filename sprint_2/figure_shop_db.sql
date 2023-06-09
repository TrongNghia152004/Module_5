create schema figure_shop;
use figure_shop;
CREATE TABLE figure_type (
  id_figure_type INT auto_increment PRIMARY KEY,
  name_figure_type varchar(255)
);
CREATE TABLE figure (
  id INT auto_increment PRIMARY KEY,
  name_product varchar(255),
  price varchar(255),
  quantity varchar(255),
  id_figure_type int,
  foreign key (id_figure_type) references figure_type(id_figure_type)
);
create table account_user(
id_account int auto_increment primary key,
name_account varchar(255),
password_account varchar(255)
);
CREATE TABLE customer (
  id_customer INT auto_increment PRIMARY KEY,
  gender varchar(255),
  date_of_birth varchar(255),
  identity_card varchar(255),
  phone_number varchar(255),
  email varchar(255),
  address varchar(255),
  name varchar(255),
  id_account int,
  foreign key (id_account) references account_user(id_account)
  );
CREATE TABLE employee (
  id_employee INT auto_increment PRIMARY KEY,
    gender varchar(255),
  date_of_birth varchar(255),
  identity_card varchar(255),
  phone_number varchar(255),
  email varchar(255),
  address varchar(255),
  name varchar(255),
  id_account int,
foreign key (id_account) references account_user(id_account)
);
create table roles(
id_role int auto_increment primary key,
name_role varchar(255)
);
create table role_account(
id int auto_increment primary key,
id_account int,
id_role int,
foreign key (id_account) references account_user(id_account),
foreign key (id_role) references roles(id_role)
);