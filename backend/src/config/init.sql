-- Active: 1729978767201@@127.0.0.1@5432@proyectosportafolio


CREATE DATABASE proyectosportafolio;

CREATE TABLE proyectos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    tecnologias VARCHAR(255) NOT NULL,
    fecha VARCHAR(255) NOT NULL,
    URL VARCHAR(255) NOT NULL
);

CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    id_proyecto INT NOT NULL,
    imagen_url TEXT NOT NULL, 
    CONSTRAINT fk_images FOREIGN KEY (id_proyecto) 
        REFERENCES proyectos (id) ON UPDATE CASCADE ON DELETE CASCADE
);


SELECT * FROM proyectos;

SELECT * FROM images;