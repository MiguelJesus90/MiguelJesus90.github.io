create database Bar;

use Bar;

create table Reservas;

CREATE TABLE Reservas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    hora TIME,
    fecha DATE,
    num_personas INT
);



SELECT id, nombre, fecha, hora, num_personas FROM Reservas;
