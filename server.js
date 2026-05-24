require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const validateApiKey = require('./middleware/authMiddleware');
const taskRoutes = require('./routes/taskRoutes');
const goalRoutes = require('./routes/goalRoutes');
const cors = require('cors')


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

connectDB();

app.use(validateApiKey);

app.use('/', taskRoutes);
app.use('/', goalRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});