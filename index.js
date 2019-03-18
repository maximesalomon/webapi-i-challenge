// implement your API here

const express = require('express');

const server = express();
const db = require('./data/db')

// ENDPOINTS

server.get('/api/users', (req, res) => {
    db.find()
    .then((users) => {
        res.status(200).json(users);
    })
    .catch(err => {
        res.status(500)
        .json({message: "failed to get users"})
    })
});

server.listen(8000, () => console.log('API running on port 8000'));