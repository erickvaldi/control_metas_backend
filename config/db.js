const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    console.log('MONGO_URI en db.js:', process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB conectado correctamente');
  } catch (err) {
    console.error('Error de conexión MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;