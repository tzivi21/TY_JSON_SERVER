const DB_actions = require('../Dal/PostsCrud');
const validation=require('../modules/validation');
 

const PostsController = {
   
    createPost: async (post) => {
        return await DB_actions.createPost(post);
    },
   
    getAllPosts: async () => {
        return await DB_actions.getAllPosts();
    },
    
    getPostById: async (id) => {
        return await DB_actions.getPostById(id);
    },
    
    updatePost: async (updatedPostData) => {
        return await DB_actions.updatePost(updatedPostData);
    },
   
    deletePost: async (id) => {
        await DB_actions.deletePost(id);
    },

    getPostComments:async (id) => {
        await DB_actions.getPostComments(id);
    }
};

module.exports = PostsController;

