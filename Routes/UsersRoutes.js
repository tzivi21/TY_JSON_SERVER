const express = require("express");
const app = express.Router();
const UsersController = require("../Controllers/UsersController");
const validation = require('../modules/validation');


app.get('/', async (req, res) => {
    try {
        let users = await UsersController.getAllUsers();
        res.status(200).json(users);
        res.end();
    } catch (error) {
        res.status(500).json({ error: "server internal error" });
        res.end();
    }
});

app.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        let user = await UsersController.getUserById(id);
        if(!user) {
            res.status(404).json({ error: "user not found" });
            res.end();
        }
        else {
            res.status(200).json(user);
            res.end();
        }
    } catch (error) {
        res.status(500).json({ error: "server internal error" });
        res.end();
    }
});

app.get('/:id/todos', async (req, res) => {
    try {
        const { id } = req.params;
        let todos = await UsersController.getUserTodos(id);
        res.status(200).json(todos);
        res.end();
    } catch (error) {
        res.status(500).json({ error: "server internal error" });
        res.end();
    }
});

app.get('/:id/posts', async (req, res) => {
    try {
        const { id } = req.params;
        let posts = await UsersController.getUserPosts(id);
        res.status(200).json(posts);
        res.end();
    } catch (error) {
        res.status(500).json({ error: "server internal error" });
        res.end();
    }
});

app.post('/', async (req, res) => {
    try {
        const user  = req.body;
        if(!validation.validateUserInput(user)){
            res.status(400).json({ error: 'invalid input' });
            res.end();
        }
        else {
            const newUser = await UsersController.createUser(user);
            res.status(200).json(newUser); 
            res.end();
        }
        
    } catch (error) {
        res.status(500).json({ error: "server internal error" });
        res.end();
    }
});

app.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUserData = req.body;
        if(!validation.validateUserInput(updatedUserData, true)){
            res.status(400).json({ error: 'invalid input' });
            res.end();
        }
        else if(!UsersController.getUserById(id)) {
            res.status(404).json({ error: "user not found" });
            res.end();
        }
        else {
            updatedUserData = UsersController.updateUser(updatedUserData);
            res.status(200).json(updatedUserData);
            res.end();
        }
    } catch (error) {
        res.status(500).json({ error: "server internal error" });
        res.end();
    }
});

app.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if(!UsersController.getUserById(id)) {
            res.status(404).json({ error: "user not found" });
            res.end();
        }
        else {
            await UsersController.getUserById(id);
            res.status(200).json({});
            res.end();
        }
    } catch (error) {
        res.status(500).json({ error: "server internal error" });
        res.end();
    }
});


module.exports = app; 

