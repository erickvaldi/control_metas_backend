const express = require('express');
const validateApiKey = require('./middleware/authMiddleware');
const taskRoutes = require('./routes/taskRoutes');
const goalRoutes = require('./routes/goalRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

// Middleware de autorización
app.use(validateApiKey);

// Rutas segmentadas
app.use('/', taskRoutes);
app.use('/', goalRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:3000`);
});