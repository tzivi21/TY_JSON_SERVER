const express = require("express");
const app = express.Router();
const CommentsController = require("../Controllers/CommentsController");
const validation = require('../modules/validation');


app.get('/', async (req, res) => {
    try {
        let comments = await CommentsController.getAllComments();
        res.status(200).json(comments);
        res.end();
    } catch (error) {
        res.status(500).json({ error: "server internal error" });
        res.end();
    }
});

app.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        let comment = await CommentsController.getCommentById(id);
        if(!comment) {
            res.status(404).json({ error: "comment not found" });
            res.end();
        }
        else {
            res.status(200).json(comment);
            res.end();
        }
    } catch (error) {
        res.status(500).json({ error: "server internal error" });
        res.end();
    }
});

app.post('/', async (req, res) => {
    try {
        const comment  = req.body;
        if(!validation.validateCommentInput(comment)){
            res.status(400).json({ error: 'invalid input' });
            res.end();
        }
        else {
            const newComment = await CommentsController.createComment(comment);
            res.status(200).json(newComment); 
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
        let updatedCommentData = req.body;
        if(!validation.validateCommentInput(updatedCommentData, true)){
            res.status(400).json({ error: 'invalid input' });
            res.end();
        }
        else if(await CommentsController.getCommentById(id)==null) {
            res.status(404).json({ error: "comment not found" });
            res.end();
        }
        else {
            updatedCommentData =await CommentsController.updateComment(updatedCommentData);
            res.status(200).json(updatedCommentData);
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
        if(await CommentsController.getCommentById(id)==null) {
            res.status(404).json({ error: "comment not found" });
            res.end();
        }
        else {
            await CommentsController.deleteComment(id);
            res.status(200).json({});
            res.end();
        }
    } catch (error) {
        res.status(500).json({ error: "server internal error" });
        res.end();
    }
});


module.exports = app; 

