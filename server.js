const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

const API_KEY = 'erick-api-2026';

const validateApiKey = (req, res, next) => {
  const authorization = req.header('Authorization');

  if (authorization !== API_KEY) {
    return res.status(401).json({
      message: 'API Key incorrecta',
    });
  }

  next();
};

app.use(validateApiKey);

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

// Obtener tareas
app.get('/getTasks', (req, res) => {
  return res.status(200).json(tasks);
});

// Obtener metas
app.get('/getGoals', (req, res) => {
  return res.status(200).json(goals);
});

// Agregar tarea
app.post('/addTask', (req, res) => {
  const { name, description, dueDate } = req.body;

  if (!name || !description || !dueDate) {
    return res.status(400).json({
      message: 'Parámetros incorrectos para agregar tarea',
    });
  }

  const newTask = {
    id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
    name,
    description,
    dueDate,
  };

  tasks.push(newTask);

  return res.status(200).json({
    message: 'Tarea agregada correctamente',
    task: newTask,
  });
});

// Agregar meta
app.post('/addGoal', (req, res) => {
  const { name, description, dueDate } = req.body;

  if (!name || !description || !dueDate) {
    return res.status(400).json({
      message: 'Parámetros incorrectos para agregar meta',
    });
  }

  const newGoal = {
    id: goals.length > 0 ? goals[goals.length - 1].id + 1 : 1,
    name,
    description,
    dueDate,
  };

  goals.push(newGoal);

  return res.status(200).json({
    message: 'Meta agregada correctamente',
    goal: newGoal,
  });
});

// Eliminar tarea
app.delete('/removeTask', (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({
      message: 'Parámetros incorrectos para eliminar tarea',
    });
  }

  const taskExists = tasks.some((task) => task.id === Number(id));

  if (!taskExists) {
    return res.status(400).json({
      message: 'La tarea que intenta eliminar no existe',
    });
  }

  tasks = tasks.filter((task) => task.id !== Number(id));

  return res.status(200).json({
    message: 'Tarea eliminada correctamente',
  });
});

// Eliminar meta
app.delete('/removeGoal', (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({
      message: 'Parámetros incorrectos para eliminar meta',
    });
  }

  const goalExists = goals.some((goal) => goal.id === Number(id));

  if (!goalExists) {
    return res.status(400).json({
      message: 'La meta que intenta eliminar no existe',
    });
  }

  goals = goals.filter((goal) => goal.id !== Number(id));

  return res.status(200).json({
    message: 'Meta eliminada correctamente',
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});