// implement your API here

const express = require('express');

const server = express();
const db = require('./data/db')

// ENDPOINTS

// GET API/USERS
server.get('/api/users', (req, res) => {
    db.find()
    .then((users) => {
        res.status(200).json(users);
    })
    .catch(err => {
        res.status(500)
        .json({message: "failed to get users"});
    })
});

// GET API/USERS/:ID
server.get('/api/users/:id', (req, res) => {
    const { id } = req.params;
    db.findById(id)
    .then((user) => {
        res.status(200).json(user);
    })
    .catch(err => {
        res.status(500)
        .json({message: "failed to get user"});
    })
});

// SERVER LISTENING

server.listen(8000, () => console.log('API running on port 8000'));