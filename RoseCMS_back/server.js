const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'react',
});

// Vérification de la connexion
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');
});

// Middleware pour vérifier la clé API
const API_KEY = process.env.API_KEY;

const authenticateAPIKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey && apiKey === API_KEY) {
    next();
  } else {
    return res.status(403).json({ error: 'Forbidden' });
  }
};

// Exemple de route
app.get('/api/get_users', authenticateAPIKey, (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
