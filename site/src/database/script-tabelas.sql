-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

CREATE DATABASE gymLife;

USE gymLife;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(50),
username varchar(30),
senha int
);

insert into usuario (nome, email, username, senha) values 

create table quiz (
idQuiz int primary key auto_increment,
pontuacao int, 
fkUser int, 
constraint fk_user foreign key (fkUser) references usuario (idUsuario)
);

insert into quiz (idQuiz, pontuacao, fkUser) values 

create table imc (
idImc int primary key auto_increment,
peso decimal,
altura decimal,
fkUser int,
constraint fkuser foreign key (fkUser) references usuario (idUsuario)
);

insert into imc (idImc, peso, altura, fkUser) values

create table formulario (
idForm int primary key auto_increment,
sugestao varchar(200),
fkUser int,
constraint user_fk foreign key (fkUser) references usuario (idUsuario)
);

insert into formulario (idForm, sugestao, fkUser) values

/*
comandos para criar usuário em banco de dados azure, sqlserver,
com permissão de insert + update + delete + select
*/

CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
