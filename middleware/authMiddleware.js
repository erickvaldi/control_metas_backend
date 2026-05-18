require('dotenv').config();

const API_KEY = process.env.API_KEY;

const validateApiKey = (req, res, next) => {
  const authorization = req.header('Authorization');

  if (authorization !== API_KEY) {
    return res.status(401).json({
      message: 'API Key incorrecta',
    });
  }

  next();
};

module.exports = validateApiKey;