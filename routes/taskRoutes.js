const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// Obtener tareas
router.get('/getTasks', async (req, res) => {
  try {
    const tasks = await Task.find({});
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({
      message: 'Error al obtener tareas',
      error: error.message,
    });
  }
});

// Agregar tarea
router.post('/addTask', async (req, res) => {
  const { name, description, dueDate } = req.body;

  if (!name || !description || !dueDate) {
    return res.status(400).json({
      message: 'Parámetros incorrectos para agregar tarea',
    });
  }

  try {
    const newTask = new Task({
      name,
      description,
      dueDate,
    });

    const savedTask = await newTask.save();

    return res.status(200).json({
      message: 'Tarea agregada correctamente',
      task: savedTask,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error al guardar tarea',
      error: error.message,
    });
  }
});

// Eliminar tarea
router.delete('/removeTask/:id', async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: 'Parámetros incorrectos para eliminar tarea',
    });
  }

  try {
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(400).json({
        message: 'La tarea que intenta eliminar no existe',
      });
    }

    return res.status(200).json({
      message: 'Tarea eliminada correctamente',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error al eliminar tarea',
      error: error.message,
    });
  }
});

module.exports = router;