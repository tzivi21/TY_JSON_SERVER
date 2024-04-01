const express = require("express");
const router = express.Router();
const CommentsController = require("../Controllers/CommentsController");

router.get('/', CommentsController.getAllComments);

router.get(':id', CommentsController.getCommentById);

router.post('/', CommentsController.createComment);

router.put('/:id', CommentsController.updateComment);

router.delete('/:id', CommentsController.deleteComment);


module.exports = router; 

