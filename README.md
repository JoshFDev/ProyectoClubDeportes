# Proyecto Club Deportes

Sistema de gestion para un club deportivo desarrollado con Angular 17 en el frontend y Node.js + Express en el backend, con base de datos MySQL.

## Descripcion

Este proyecto es una aplicacion web completa para la administracion de un club deportivo. Permite gestionar miembros, entrenadores, disciplinas, eventos deportivos, inscripciones y la relacion entre miembros y eventos. La aplicacion cuenta con una interfaz moderna construida con Angular 17 (componentes standalone) y un servidor REST con Express.

## Estructura del Proyecto

```
ProyectoClubDeportes/
├── appClubDeportes/     # Frontend (Angular 17)
│   ├── src/
│   │   └── app/
│   │       ├── componentes/   # Componentes standalone
│   │       ├── modelos/        # Interfaces y modelos
│   │       └── servicios/      # Servicios HTTP
│   └── package.json
├── Server/              # Backend (Node.js + Express + MySQL)
│   ├── src/
│   ├── build/           # Codigo compilado
│   └── package.json
├── DB/                  # Scripts SQL de la base de datos
└── README.md
```

## Funcionalidades

- Miembros: alta, baja, modificacion y listado de miembros del club.
- Entrenadores: gestion de entrenadores del club.
- Disciplinas: administracion de las disciplinas deportivas disponibles.
- Eventos Deportivos: creacion y gestion de eventos deportivos.
- Inscripciones: registro de inscripciones de miembros a eventos o disciplinas.
- Miembros-Evento Deportivo: asociacion entre miembros y eventos deportivos.

## Tecnologias

### Frontend

- Angular 17.3 (componentes standalone)
- TypeScript 5.4
- RxJS 7.8
- Angular Router para navegacion
- HttpClient para consumo de API REST
- Karma + Jasmine para testing

### Backend

- Node.js + Express 5
- TypeScript
- MySQL (promise-mysql)
- Morgan (logging)
- CORS

### Base de Datos

- MySQL

## Instalacion y Ejecucion

### Prerrequisitos

- Node.js (v18 o superior recomendado)
- Angular CLI (`npm install -g @angular/cli`)
- MySQL (servidor de base de datos)

### 1. Base de Datos

1. Crea una base de datos en MySQL.
2. Ejecuta el script SQL ubicado en `DB/ClubDeportesNuevo.sql` para crear las tablas y datos iniciales.

### 2. Backend (Server)

```bash
cd Server
npm install
npm run build    # Compila TypeScript (modo watch)
npm run dev      # Ejecuta con nodemon
```

El servidor se iniciara en `http://localhost:3000` (o el puerto configurado).

### 3. Frontend (Angular)

```bash
cd appClubDeportes
npm install
npm start        # Ejecuta ng serve
```

La aplicacion estara disponible en `http://localhost:4200`.

## Testing

Ejecuta los tests del frontend con:

```bash
cd appClubDeportes
npm test
```

## Build para Produccion

```bash
cd appClubDeportes
npm run build
```

Los archivos compilados se generaran en `dist/`.

## Colaboradores

Este proyecto fue desarrollado de manera colaborativa con:

- Ingeniero en Computacion Sergio Axel Cazares Hernandez
- Ingeniero en Computacion Agustin Estrada Hernandez

## Licencia

Este proyecto es de uso educativo/personal.