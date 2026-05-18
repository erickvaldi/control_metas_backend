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

## Persistencia de datos
A partir de la Actividad Unidad V, el backend fue actualizado para trabajar con persistencia de datos utilizando **MongoDB Atlas** y **Mongoose**.

Ahora los endpoints realizan operaciones reales sobre la base de datos:
- GET /getTasks → consulta las tareas en MongoDB
- GET /getGoals → consulta las metas en MongoDB
- POST /addTask → inserta una tarea en MongoDB
- POST /addGoal → inserta una meta en MongoDB
- DELETE /removeTask/:id → elimina una tarea por su `_id`
- DELETE /removeGoal/:id → elimina una meta por su `_id`

## Base de datos utilizada
Se utilizó **MongoDB Atlas** como base de datos NoSQL para almacenar tareas y metas.

## Variables de entorno
Para ejecutar correctamente el proyecto se debe crear un archivo `.env` en la raíz del backend con las siguientes variables:

```env
PORT=3000
MONGO_URI=mongodb://ekvaldiviezo_db_user:Matrix@ac-dnlodes-shard-00-00.sufmzpt.mongodb.net:27017,ac-dnlodes-shard-00-01.sufmzpt.mongodb.net:27017,ac-dnlodes-shard-00-02.sufmzpt.mongodb.net:27017/control_metas?ssl=true&replicaSet=atlas-24y6kr-shard-0&authSource=admin&appName=Cluster0
API_KEY=erick-api-2026