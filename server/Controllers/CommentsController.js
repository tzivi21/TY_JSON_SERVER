const DB_actions = require('../Dal/CommentsCrud');
const validation=require('../modules/validation');
 

const CommentsController = {
   
    createComment: async (comment) => {
        return await DB_actions.createComment(comment);
    },

   
    getAllComments: async () => {
        return await DB_actions.getAllComments();
    },

    
    getCommentById: async (id) => {
        return await DB_actions.getCommentById(id);
    },


    
    updateComment: async (updatedCommentData) => {
        return await DB_actions.updateComment(updatedCommentData);
    },

   
    deleteComment: async (id) => {
        await DB_actions.deleteComment(id);
    }
};

module.exports = CommentsController;

