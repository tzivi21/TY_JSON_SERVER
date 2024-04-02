const express = require("express");
const app = express.Router();
const TodosController = require("../Controllers/TodosController");

app.get('/', TodosController.getAllTodos);

app.get('/:id', TodosController.getTodoById);

app.post('/', TodosController.createTodo);

app.put('/:id', TodosController.updateTodo);

app.delete('/:id', TodosController.deleteTodo);


module.exports = app; 

