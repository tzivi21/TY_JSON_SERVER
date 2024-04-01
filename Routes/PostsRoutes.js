const express = require("express");
const router = express.Router();
const PostsController = require("../Controllers/PostsController");

router.get('/', PostsController.getAllPosts);

router.get(':id', PostsController.getPostById);

router.get(':id/comments', PostsController.getPostComments);

router.post('/', PostsController.createpost);

router.put('/:id', PostsController.updatePost);

router.delete('/:id', PostsController.deletePost);


module.exports = router; 

