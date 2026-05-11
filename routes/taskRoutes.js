const express = require('express');
const router = express.Router();
const dataStore = require('../data/dataStore');

// Obtener tareas
router.get('/getTasks', (req, res) => {
  return res.status(200).json(dataStore.tasks);
});

// Agregar tarea
router.post('/addTask', (req, res) => {
  const { name, description, dueDate } = req.body;

  if (!name || !description || !dueDate) {
    return res.status(400).json({
      message: 'Parámetros incorrectos para agregar tarea',
    });
  }

  const newTask = {
    id: dataStore.tasks.length > 0 ? dataStore.tasks[dataStore.tasks.length - 1].id + 1 : 1,
    name,
    description,
    dueDate,
  };

  dataStore.tasks.push(newTask);

  return res.status(200).json({
    message: 'Tarea agregada correctamente',
    task: newTask,
  });
});

// Eliminar tarea
router.delete('/removeTask', (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({
      message: 'Parámetros incorrectos para eliminar tarea',
    });
  }

  const taskIndex = dataStore.tasks.findIndex((task) => task.id === Number(id));

  if (taskIndex === -1) {
    return res.status(400).json({
      message: 'La tarea que intenta eliminar no existe',
    });
  }

  dataStore.tasks.splice(taskIndex, 1);

  return res.status(200).json({
    message: 'Tarea eliminada correctamente',
  });
});

module.exports = router;