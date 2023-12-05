
create database gymLife;
use gymLife;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(50),
username varchar(30),
senha varchar(50)
);
	
create table quiz (
idQuiz int primary key auto_increment,
pontuacao int, 
fkUser int, 
constraint fk_user foreign key (fkUser) references usuario (idUsuario)
);

select * from usuario;




