require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const validateApiKey = require('./middleware/authMiddleware');
const taskRoutes = require('./routes/taskRoutes');
const goalRoutes = require('./routes/goalRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB();

app.use(validateApiKey);

app.use('/', taskRoutes);
app.use('/', goalRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});