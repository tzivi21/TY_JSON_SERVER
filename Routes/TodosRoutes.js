const express = require("express");
const app = express.Router();
const TodosController = require("../Controllers/TodosController");
const validation = require('../modules/validation');


app.get('/', async (req, res) => {
    try {
        let todos = await TodosController.getAllTodos();
        res.status(200).json(todos);
        res.end();
    } catch (error) {
        res.status(500).json({ error: "server internal error" });
        res.end();
    }
});

app.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        let todo = await TodosController.getTodoById(id);
        if(!todo) {
            res.status(404).json({ error: "todo not found" });
            res.end();
        }
        else {
            res.status(200).json(todo);
            res.end();
        }
    } catch (error) {
        res.status(500).json({ error: "server internal error" });
        res.end();
    }
});

app.post('/', async (req, res) => {
    try {
        const todo  = req.body;
        if(!validation.validateTodoInput(todo)){
            res.status(400).json({ error: 'invalid input' });
            res.end();
        }
        else {
            const newTodo = await TodosController.createTodo(todo);
            res.status(200).json(newTodo); 
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
        let updatedTodoData = req.body;
        if(!validation.validateTodoInput(updatedTodoData, true)){
            res.status(400).json({ error: 'invalid input' });
            res.end();
        }
        else if(await TodosController.getTodoById(id)==null) {
            res.status(404).json({ error: "todo not found" });
            res.end();
        }
        else {
            updatedTodoData =await TodosController.updateTodo(updatedTodoData);
            res.status(200).json(updatedTodoData);
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
        if(await TodosController.getTodoById(id)==null) {
            res.status(404).json({ error: "todo not found" });
            res.end();
        }
        else {
            await TodosController.deleteTodo(id);
            res.status(200).json({});
            res.end();
        }
    } catch (error) {
        res.status(500).json({ error: "server internal error" });
        res.end();
    }
});


module.exports = app; 

