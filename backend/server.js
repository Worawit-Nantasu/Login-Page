const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const { dbConfig } = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection(dbConfig);

connection.connect(error => {
  if (error) throw error;
  console.log('Database connected successfully.');
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  connection.query(query, [email, password], (error, results) => {
    if (error) {
      return res.status(500).send('Server error');
    }
    if (results.length > 0) {
      return res.status(200).send('Login successful');
    } else {
      return res.status(401).send('Invalid credentials');
    }
  });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
