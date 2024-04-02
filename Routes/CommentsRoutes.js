const express = require("express");
const app = express.Router();
const CommentsController = require("../Controllers/CommentsController");

app.get('/', CommentsController.getAllComments);

app.get('/:id', CommentsController.getCommentById);

app.post('/', CommentsController.createComment);

app.put('/:id', CommentsController.updateComment);

app.delete('/:id', CommentsController.deleteComment);


module.exports = app; 

