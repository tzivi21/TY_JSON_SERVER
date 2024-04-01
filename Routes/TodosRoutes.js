const express = require("express");
const router = express.Router();
const TodosController = require("../Controllers//TodosController");

router.get('/', TodosController.getAllTodos);

router.get(':id', TodosController.getTodoById);

router.post('/', TodosController.createTodo);

router.put('/:id', TodosController.updateTodo);

router.delete('/:id', TodosController.deleteTodo);


module.exports = router; 

