create database club_elite;

use club_elite;

create table users(uid int primary key not null auto_increment, name varchar(50) not null, email varchar(100) not null, password varchar(255));

