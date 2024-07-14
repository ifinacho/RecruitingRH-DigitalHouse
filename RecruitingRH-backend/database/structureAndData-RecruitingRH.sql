CREATE TABLE IF NOT EXISTS `profesiones` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `nombre` VARCHAR(64)
);

INSERT INTO `profesiones` (`id`,`nombre`)
VALUES
(1,'Abogado'),
(2,'Arquitecto'),
(3,'Botánico'),
(4,'Computista'),
(5,'Economista'),
(6,'Profesor'),
(7,'Lingüista'),
(8,'Psicólogo'),
(9,'Médico'),
(10,'Ingeniero');


CREATE TABLE IF NOT EXISTS `sexos` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `nombre` VARCHAR(64)
);

INSERT INTO `sexos` (`id`,`nombre`)
VALUES
(1,'Femenino'),
(2,'Masculino'),
(3,'Otro');


CREATE TABLE IF NOT EXISTS `aspirantes` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `dni` BIGINT,
  `nombre` VARCHAR(128),
  `apellido` VARCHAR(128),
  `email` VARCHAR(128),
  `telefono` BIGINT,
  `urlLinkedin` VARCHAR(256),
  `fechaNacimiento` DATE,
  `imagen` VARCHAR(256),
  `profesionId` INT,
  `sexoId` INT,
  FOREIGN KEY (`profesionId`) REFERENCES `profesiones`(id),
  FOREIGN KEY (`sexoId`) REFERENCES `sexos`(id)
);

INSERT INTO `aspirantes` (`id`,`dni`,`nombre`,`apellido`,`email`,`telefono`,`urlLinkedin`,`fechaNacimiento`,`imagen`,`profesionId`,`sexoId`)
VALUES
(1,40123456,'Mara','Neira','maraneira@gmail.com',3886503426,'https://www.linkedin.com/in/maraneira/','1980-9-15','foto1.jpg',8,1),
(2,45654321,'Esteban','Palomares','estebanpalomares@hotmail.com',3884958401,'https://www.linkedin.com/in/estebanpalomares/','1985-1-23','foto2.jpg',4,2),
(3,42987456,'Jennifer','Pastor','jenniferpastor@gmail.com',3885209317,'https://www.linkedin.com/in/jenniferpastor/','1990-5-7','foto3.jpg',2,1),
(4,48321987,'Maria Beatriz','Armas','mariaarmas@hotmail.com',3886469821,'https://www.linkedin.com/in/mariaarmas/','1983-8-4','foto4.jpg',10,3),
(5,41147963,'Celso','Redondo','celsoredondo@gmail.com',3884836924,'https://www.linkedin.com/in/celsoredondo/','1991-11-27','foto5.jpg',3,2),
(6,49741369,'Luis','Galindo','luisgalindo@hotmail.com',3885754210,'https://www.linkedin.com/in/luisgalindo/','1986-12-7','foto6.jpg',1,3),
(7,46852951,'Maximo','Carbonell','maximocarbonell@gmail.com',3886802691,'https://www.linkedin.com/in/maximocarbonell/','1994-2-18','foto7.jpg',5,2),
(8,44753684,'Estefania','Reina','estefaniareina@hotmail.com',3884741082,'https://www.linkedin.com/in/estefaniareina/','1982-10-31','foto8.jpg',7,1),
(9,43489327,'Maria Eva','Valdes','mariavaldes@gmail.com',3885590248,'https://www.linkedin.com/in/mariavaldes/','1995-4-14','foto9.jpg',6,1),
(10,47269751,'Cecilio','Maestre','ceciliomaestre@hotmail.com',3886418257,'https://www.linkedin.com/in/ceciliomaestre/','1988-9-22','foto10.jpg',9,2);
