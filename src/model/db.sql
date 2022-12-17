CREATE DATABASE Pressa;
\c Pressa
CREATE EXTENSION pgcrypt;
CREATE TABLE Links(
  link_id serial primary key,
  link_belongs varchar(64) not null,
  link text not null
)
CREATE TABLE Meeting(
  meet_id serial primary key,
  meet_title varchar(64) not null,
  meet_description text not null,
  meet_thumbnail text not null,
  meet_text text not null,
  meet_author varchar(64) not null,
  meet_date date default  not null,
  meet_time time default current_time not null,
  meet_status text,
  meet_links  text,
  created_at timestamp default current_timestamp not null
);
insert into Meeting(meet_title,meet_description,meet_thumbnail,meet_text,meet_author,meet_date)values('adsdf','dasfad','adasdasd','adasdasdda','mirsidiq','2002-12-26');
insert into Meeting(meet_title,meet_description,meet_thumbnail,meet_text,meet_author,meet_date,meet_time)values('adsdf','dasfad','adasdasd','adasdasdda','mirsidiq','2002-12-26','18:00');
insert into Links(link_belongs,link)values('youtube','sadfghj')