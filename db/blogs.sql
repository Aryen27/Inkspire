use club_elite;

create table blogs(bid int not null auto_increment primary key, title varchar(255) not null, content text not null, authorid int not null, createdAt timestamp default current_timestamp not null, updatedAt timestamp default current_timestamp on update current_timestamp not null, likes int default 0 not null , foreign key (authorid) references users(uid) on delete cascade);