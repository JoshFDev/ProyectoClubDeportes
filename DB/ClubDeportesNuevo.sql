-- Crear la base de datos
CREATE DATABASE clubdeportesnuevo;
USE clubdeportesnuevo;

-- Tabla miembros
CREATE TABLE miembros (
    idMiembros VARCHAR(13) NOT NULL,
    nombreMiembros VARCHAR(45),
    apellidoPaterno VARCHAR(45),
    apellidoMaterno VARCHAR(45),
    sexo VARCHAR(15),
    fechaNacimiento DATE,
    categoria VARCHAR(45),
    direccion VARCHAR(100),
    correoMiembro VARCHAR(45),
    telefono BIGINT(20),
    PRIMARY KEY (idMiembros)
);

-- Tabla disciplinas
CREATE TABLE disciplinas (
    idDisciplinas VARCHAR(6) NOT NULL,
    nombreDisciplina VARCHAR(45),
    nivel VARCHAR(45),
    PRIMARY KEY (idDisciplinas)
);

-- Tabla entrenadores
CREATE TABLE entrenadores (
    idEntrenadores VARCHAR(8) NOT NULL,
    nombreEntrenador VARCHAR(45),
    apellidoPaterno VARCHAR(45),
    apellidoMaterno VARCHAR(45),
    sexo VARCHAR(15),
    fechaNacimiento DATE,
    especialidad VARCHAR(45),
    correo VARCHAR(45),
    telefono BIGINT(20),
    direccion VARCHAR(100),
    idDisciplinas VARCHAR(6), -- FK hacia disciplinas
    PRIMARY KEY (idEntrenadores),
    FOREIGN KEY (idDisciplinas) REFERENCES disciplinas(idDisciplinas)
);

-- Tabla eventoDeportivo
CREATE TABLE eventoDeportivo (
    idEventoDeportivo INT(11) NOT NULL AUTO_INCREMENT,
    nombreEvento VARCHAR(45),
    fechaEvento DATE,
    horaEvento TIME,
    lugar VARCHAR(45),
    descripcion VARCHAR(100),
    PRIMARY KEY (idEventoDeportivo)
);

-- Tabla miembroseventodeportivo (relación muchos a muchos entre miembros y eventos)
CREATE TABLE miembroseventodeportivo (
    idMiembrosEventoDeportivo INT(11) NOT NULL,
    Miembros_idMiembros VARCHAR(13),
    EventoDeportivo_idEventoDeportivo INT(11),
    PRIMARY KEY (idMiembrosEventoDeportivo),
    FOREIGN KEY (Miembros_idMiembros) REFERENCES miembros(idMiembros),
    FOREIGN KEY (EventoDeportivo_idEventoDeportivo) REFERENCES eventoDeportivo(idEventoDeportivo)
);

-- Tabla inscripciones (relación muchos a muchos entre miembros y disciplinas)
CREATE TABLE inscripciones (
    idInscripciones INT(11) NOT NULL AUTO_INCREMENT,
    idMiembros VARCHAR(13),
    idDisciplinas VARCHAR(6),
    fechaInscripcion DATE,
    PRIMARY KEY (idInscripciones),
    FOREIGN KEY (idMiembros) REFERENCES miembros(idMiembros),
    FOREIGN KEY (idDisciplinas) REFERENCES disciplinas(idDisciplinas)
);
