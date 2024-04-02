const express = require("express");
const app = express.Router();
const PostsController = require("../Controllers/PostsController");

app.get('/', PostsController.getAllPosts);

app.get('/:id', PostsController.getPostById);

app.get('/:id/comments', PostsController.getPostComments);

app.post('/', PostsController.createPost);

app.put('/:id', PostsController.updatePost);

app.delete('/:id', PostsController.deletePost);


module.exports = app; 

