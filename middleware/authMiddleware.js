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

module.exports = validateApiKey;