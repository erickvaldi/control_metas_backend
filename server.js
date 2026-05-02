const express = require('express');

const app = express();
const PORT = 3000;

// Middleware para leer JSON
app.use(express.json());

// API Key creada por el estudiante
const API_KEY = 'erick-api-2026';

// Middleware de autorización
const validateApiKey = (req, res, next) => {
  const authorization = req.header('Authorization');

  if (!authorization) {
    return res.status(401).json({
      message: 'No se envió el header Authorization',
    });
  }

  if (authorization !== API_KEY) {
    return res.status(403).json({
      message: 'API Key no válida',
    });
  }

  next();
};

// Aplicar middleware a todas las rutas
app.use(validateApiKey);

// Arreglos en memoria
let tasks = [
  {
    id: 1,
    name: 'Proyecto de Curso de desarrollo web',
    description: 'Elaborar una aplicación web responsive para controlar tareas.',
    dueDate: '31/05/2024',
  },
  {
    id: 2,
    name: 'Subir Actividad 2',
    description: 'Completar y entregar la actividad usando Zustand.',
    dueDate: '10/06/2024',
  },
];

let goals = [
  {
    id: 1,
    name: 'Aprender React',
    description: 'Comprender componentes, props y estados.',
    dueDate: '30/06/2024',
  },
  {
    id: 2,
    name: 'Aprender Node.js',
    description: 'Entender cómo crear una API básica con Express.',
    dueDate: '15/07/2024',
  },
];

// GET /getTasks
app.get('/getTasks', (req, res) => {
  res.json(tasks);
});

// GET /getGoals
app.get('/getGoals', (req, res) => {
  res.json(goals);
});

// POST /addTask
app.post('/addTask', (req, res) => {
  const { name, description, dueDate } = req.body;

  if (!name || !description || !dueDate) {
    return res.status(400).json({
      message: 'Todos los campos son obligatorios: name, description, dueDate',
    });
  }

  const newTask = {
    id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
    name,
    description,
    dueDate,
  };

  tasks.push(newTask);

  res.status(201).json({
    message: 'Tarea agregada correctamente',
    task: newTask,
  });
});

// POST /addGoal
app.post('/addGoal', (req, res) => {
  const { name, description, dueDate } = req.body;

  if (!name || !description || !dueDate) {
    return res.status(400).json({
      message: 'Todos los campos son obligatorios: name, description, dueDate',
    });
  }

  const newGoal = {
    id: goals.length > 0 ? goals[goals.length - 1].id + 1 : 1,
    name,
    description,
    dueDate,
  };

  goals.push(newGoal);

  res.status(201).json({
    message: 'Meta agregada correctamente',
    goal: newGoal,
  });
});

// DELETE /removeTask
app.delete('/removeTask', (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({
      message: 'Debes enviar el id de la tarea a eliminar',
    });
  }

  const taskExists = tasks.some((task) => task.id === Number(id));

  if (!taskExists) {
    return res.status(404).json({
      message: 'Tarea no encontrada',
    });
  }

  tasks = tasks.filter((task) => task.id !== Number(id));

  res.json({
    message: 'Tarea eliminada correctamente',
  });
});

// DELETE /removeGoal
app.delete('/removeGoal', (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({
      message: 'Debes enviar el id de la meta a eliminar',
    });
  }

  const goalExists = goals.some((goal) => goal.id === Number(id));

  if (!goalExists) {
    return res.status(404).json({
      message: 'Meta no encontrada',
    });
  }

  goals = goals.filter((goal) => goal.id !== Number(id));

  res.json({
    message: 'Meta eliminada correctamente',
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});