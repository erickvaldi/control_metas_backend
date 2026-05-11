# Actividad Unidad IV - Métodos HTTP REST

## Descripción
Backend desarrollado con Node.js y Express para el control de tareas y metas personales, implementando códigos de respuesta HTTP REST.

## Requisitos
- Node.js LTS
- npm

## Versión de Node.js utilizada
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

## Códigos de respuesta implementados
- 200: respuesta satisfactoria
- 401: API Key incorrecta
- 400: parámetros incorrectos al agregar o eliminar tareas o metas

## Organización del proyecto
Las rutas fueron segmentadas en módulos separados para tareas y metas, y el middleware de autorización se encuentra en un archivo independiente.

## Nota
Los datos se almacenan en arreglos en memoria, por lo que no persisten al detener la aplicación.

