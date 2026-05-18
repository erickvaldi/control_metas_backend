const express = require('express');
const router = express.Router();
const Goal = require('../models/goal');

// Obtener metas
router.get('/getGoals', async (req, res) => {
  try {
    const goals = await Goal.find({});
    return res.status(200).json(goals);
  } catch (error) {
    return res.status(500).json({
      message: 'Error al obtener metas',
      error: error.message,
    });
  }
});

// Agregar meta
router.post('/addGoal', async (req, res) => {
  const { name, description, dueDate } = req.body;

  if (!name || !description || !dueDate) {
    return res.status(400).json({
      message: 'Parámetros incorrectos para agregar meta',
    });
  }

  try {
    const newGoal = new Goal({
      name,
      description,
      dueDate,
    });

    const savedGoal = await newGoal.save();

    return res.status(200).json({
      message: 'Meta agregada correctamente',
      goal: savedGoal,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error al guardar meta',
      error: error.message,
    });
  }
});

// Eliminar meta
router.delete('/removeGoal/:id', async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: 'Parámetros incorrectos para eliminar meta',
    });
  }

  try {
    const deletedGoal = await Goal.findByIdAndDelete(id);

    if (!deletedGoal) {
      return res.status(400).json({
        message: 'La meta que intenta eliminar no existe',
      });
    }

    return res.status(200).json({
      message: 'Meta eliminada correctamente',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error al eliminar meta',
      error: error.message,
    });
  }
});

module.exports = router;