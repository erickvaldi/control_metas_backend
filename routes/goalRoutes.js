const express = require('express');
const router = express.Router();
const dataStore = require('../data/dataStore');

// Obtener metas
router.get('/getGoals', (req, res) => {
  return res.status(200).json(dataStore.goals);
});

// Agregar meta
router.post('/addGoal', (req, res) => {
  const { name, description, dueDate } = req.body;

  if (!name || !description || !dueDate) {
    return res.status(400).json({
      message: 'Parámetros incorrectos para agregar meta',
    });
  }

  const newGoal = {
    id: dataStore.goals.length > 0 ? dataStore.goals[dataStore.goals.length - 1].id + 1 : 1,
    name,
    description,
    dueDate,
  };

  dataStore.goals.push(newGoal);

  return res.status(200).json({
    message: 'Meta agregada correctamente',
    goal: newGoal,
  });
});

// Eliminar meta
router.delete('/removeGoal', (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({
      message: 'Parámetros incorrectos para eliminar meta',
    });
  }

  const goalIndex = dataStore.goals.findIndex((goal) => goal.id === Number(id));

  if (goalIndex === -1) {
    return res.status(400).json({
      message: 'La meta que intenta eliminar no existe',
    });
  }

  dataStore.goals.splice(goalIndex, 1);

  return res.status(200).json({
    message: 'Meta eliminada correctamente',
  });
});

module.exports = router;