const DB_actions = require('../Dal/PostsCrud');
const validation=require('../modules/validation');
 

const PostsController = {
   
    createPost: async (req, res) => {
        try {
            const post  = req.body;
            if(!validation.validatePostInput(post)){
                res.status(400).json({ error: 'invalid input' });
                res.end();
            }
            else {
                const id = await DB_actions.createPost(post);
                res.status(200).json({...post,id:id}); 
                res.end();
            }
            
        } catch (error) {
            res.status(500).json({ error: "server internal error" });
            res.end();
        }
    },

   
    getAllPosts: async (req, res) => {
        try {
            let posts = await DB_actions.getAllPosts();
            res.status(200).json(posts);
            res.end();
        } catch (error) {
            res.status(500).json({ error: "server internal error" });
            res.end();
        }
    },

    
    getPostById: async (req, res) => {
        try {
            const { id } = req.params;
            let post = await DB_actions.getPostById(id);
            if(!post) {
                res.status(404).json({error: 'Not Found'});
            }
            else {
                res.status(200).json(post);
                res.end();
            }
        } catch (error) {
            res.status(500).json({ error: "server internal error" });
            res.end();
        }
    },

    
    updatePost: async (req, res) => {
        try {
            const { id } = req.params;
            const updatedPostData = req.body;
            if(!validation.validatePostInput(updatedPostData, true)){
                res.status(400).json({ error: 'invalid input' });
            }
            else {
                await DB_actions.updatePost(updatedPostData);
                res.status(200).json(updatedPostData);
                res.end();
            }
        } catch (error) {
            res.status(500).json({ error: "server internal error" });
            res.end();
        }
    },

   
    deletePost: async (req, res) => {
        try {
            const { id } = req.params;
            await DB_actions.deletePost(id);
            res.status(200).json({});
            res.end();
        } catch (error) {
            res.status(500).json({ error: "server internal error" });
            res.end();
        }
    },

    getPostComments:async (req, res) => {
        try {
            const { id } = req.params;
            let coomments = await DB_actions.getPostComments(id);
            res.status(200).json(coomments);
            res.end();
        } catch (error) {
            res.status(500).json({ error: "server internal error" });
            res.end();
        }

        
    }
};

module.exports = PostsController;

