// implement your API here

const express = require('express');

const server = express();
const db = require('./data/db');
const parser = express.json();

server.use(parser);

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
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({message: "user doesn't exist"});
        }
    })
    .catch(err => {
        res.status(500)
        .json({message: "failed to get user"});
    })
});

// POST API/USERS
server.post('/api/users', (req, res) => {
    const user = req.body;
    db.insert(user)
    .then((user) => {
            res.status(200).json(user);
    })
    .catch(err => {
        res.status(500)
        .json({message: "failed to insert user in db"});
    })
});

// SERVER LISTENING

server.listen(7000, () => console.log('API running on port 7000'));