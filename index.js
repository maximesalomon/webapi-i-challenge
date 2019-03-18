// implement your API here

const express = require('express');

const server = express();
const db = require('./data/db')

// ENDPOINTS

server.get('/api/users', (req, res) => {
    db.find()
    .then()
    .catch()
  res.status(200).json(users);
});

server.listen(8000, () => console.log('API running on port 8000'));