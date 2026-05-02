# Actividad Unidad III - Node JS + Express

## Descripción
Backend desarrollado con Node.js y Express para llevar el control de tareas y metas personales.

## Requisitos
- Node.js LTS
- npm

## Versión de Node.js utilizada
Este proyecto fue desarrollado utilizando Node.js versión LTS.

Versión utilizada:
v24.13.1

## Instalación
1. Clonar el repositorio
2. Ejecutar:
   npm install

## Ejecución
Para iniciar el servidor:
npm run dev

O también:
npm start

## API Key
Para consumir los endpoints se debe enviar el siguiente header:

Authorization: erick-api-2026

## Endpoints
- GET /getTasks
- GET /getGoals
- POST /addTask
- POST /addGoal
- DELETE /removeTask
- DELETE /removeGoal

## Nota
Los datos se almacenan en arreglos en memoria, por lo que no persisten al detener la aplicación.