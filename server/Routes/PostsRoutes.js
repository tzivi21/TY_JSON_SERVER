const express = require("express");
const app = express.Router();
const PostsController = require("../Controllers/PostsController");
const CommentsController = require("../Controllers/CommentsController");
const validation = require('../modules/validation');


app.get('/', async (req, res) => {
    try {
        let posts = await PostsController.getAllPosts();
        res.status(200).json(posts);
        res.end();
    } catch (error) {
        res.status(500).json({ error: "server internal error" });
        res.end();
    }
});

app.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        let post = await PostsController.getPostById(id);
        if(!post) {
            res.status(404).json({ error: "post not found" });
            res.end();
        }
        else {
            res.status(200).json(post);
            res.end();
        }
    } catch (error) {
        res.status(500).json({ error: "server internal error" });
        res.end();
    }
});

app.post('/', async (req, res) => {
    try {
        const post  = req.body;
        if(!validation.validatePostInput(post)){
            res.status(400).json({ error: 'invalid input' });
            res.end();
        }
        else {
            const newPost = await PostsController.createPost(post);
            res.status(200).json(newPost); 
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
        let updatedPostData = req.body;
        if(!validation.validatePostInput(updatedPostData, true)){
            res.status(400).json({ error: 'invalid input' });
            res.end();
        }
        else if(await PostsController.getPostById(id)==null) {
            res.status(404).json({ error: "post not found" });
            res.end();
        }
        else {
            updatedPostData =await PostsController.updatePost(updatedPostData);
            res.status(200).json(updatedPostData);
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
        if(await PostsController.getPostById(id)==null) {
            res.status(404).json({ error: "post not found" });
            res.end();
        }
        else {
            await PostsController.deletePost(id);
            res.status(200).json({});
            res.end();
        }
    } catch (error) {
        res.status(500).json({ error: "server internal error" });
        res.end();
    }
});

app.get('/:id/comments', async (req, res) => {
    try {
        const { id } = req.params;
        if(await PostsController.getPostById(id)==null) {
            res.status(404).json({ error: "post not found" });
            res.end();
        }
        let comments = await PostsController.getPostComments(id);
        res.status(200).json(comments);
        res.end();
    } catch (error) {
        res.status(500).json({ error: "server internal error" });
        res.end();
    }
});

app.post('/:id/comments', async (req, res) => {
    try {
        const { id } = req.params;
        if(await PostsController.getPostById(id)==null) {
            res.status(404).json({ error: "post not found" });
            res.end();
        }
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



module.exports = app; 

