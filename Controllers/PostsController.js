const DB_actions = require('../Dal/PostsCrud');
// const validation=require('../modules/validation');
 

const PostsController = {
   
    createpost: async (req, res) => {
        try {
            const post  = req.body;
            // if(!validation.validateUserData(user)){
                res.status(400).json({ error: 'invalid input' });
                res.end();
            // }
            const id=await DB_actions.createPost(post);
            res.status(200).json({...post,id:id}); 
            res.end();
            
        } catch (error) {
            res.status(500).json({ error: error.message });
            res.end();
        }
    },

   
    getAllPosts: async (req, res) => {
        try {
            let posts = await DB_actions.getAllPosts();
            res.status(200).json(posts);
            res.end();
        } catch (error) {
            res.status(500).json({ error: error.message });
            res.end();
        }
    },

    
    getPostById: async (req, res) => {
        try {
            const { id } = req.params;
            let post = await DB_actions.getPostById(id);
            res.status(200).json(post);
            res.end();
        } catch (error) {
            res.status(500).json({ error: error.message });
            res.end();
        }
    },

    
    updatePost: async (req, res) => {
        try {
            const { id } = req.params;
            const updatedPostData = req.body;
            // if(!validation.validateUserData(updatedUserData)){
                res.status(400).json({ error: 'invalid input' });
            // }
            await DB_actions.updatePost(updatedPostData);
            res.status(200).json(updatedPostData);
            res.end();
        } catch (error) {
            res.status(500).json({ error: error.message });
            res.end();
        }
    },

   
    deletePost: async (req, res) => {
        try {
            const { id } = req.params;
            await DB_actions.deletePost(id);
            res.status(200);
            res.end();
        } catch (error) {
            res.status(500).json({ error: error.message });
            res.end();
        }
    },

    getPostComments:async (req, res) => {
        
    }
};

module.exports = PostsController;

