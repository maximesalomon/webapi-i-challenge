// implement your API here

const express = require('express');

const server = express();
const db = require('./data/db');
const parser = express.json();

server.use(parser);

// ENDPOINTS

// POST API/USERS
server.post('/api/users', (req, res) => {
    const user = req.body;
    const { name, bio } = req.body;
    db.insert(user)
    .then((user) => {
        if (name, bio) {
            res.status(200).json(user);
        } else {
            res.status(400).json({ errorMessage: "Please provide name and bio for the user." });
        }
    })
    .catch(err => {
        res.status(500)
        .json({ error: "There was an error while saving the user to the database" });
    })
});

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

// SERVER LISTENING

server.listen(7000, () => console.log('API running on port 7000'));