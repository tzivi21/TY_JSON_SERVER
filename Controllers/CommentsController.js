const DB_actions = require('../Dal/CommentsCrud');
const validation=require('../modules/validation');
 

const CommentsController = {
   
    createComment: async (req, res) => {
        try {
            const comment  = req.body;
            if(!validation.validateCommentInput(comment)) {
                res.status(400).json({ error: 'invalid input' });
                res.end();
            }
            const id=await DB_actions.createComment(comment);
            res.status(200).json({...comment,id:id}); 
            res.end();
            
        } catch (error) {
            res.status(500).json({ error: "server internal error" });
            res.end();
        }
    },

   
    getAllComments: async (req, res) => {
        try {
            let comments = await DB_actions.getAllComments();
            res.status(200).json(comments);
            res.end();
        } catch (error) {
            res.status(500).json({ error: "server internal error" });
            res.end();
        }
    },

    
    getCommentById: async (req, res) => {
        try {
            const { id } = req.params;
            let comment = await DB_actions.getCommentById(id);
            res.status(200).json(comment);
            res.end();
        } catch (error) {
            res.status(500).json({ error: "server internal error" });
            res.end();
        }
    },

    
    updateComment: async (req, res) => {
        try {
            const { id } = req.params;
            const updatedCommentData = req.body;
            if(!validation.validateCommentInput(updatedCommentData, true)) {
                res.status(400).json({ error: 'invalid input' });
            }
            await DB_actions.updateComment(updatedCommentData);
            res.status(200).json(updatedCommentData);
            res.end();
        } catch (error) {
            res.status(500).json({ error: "server internal error" });
            res.end();
        }
    },

   
    deleteComment: async (req, res) => {
        try {
            const { id } = req.params;
            await DB_actions.deleteComment(id);
            res.status(200).json({});
            res.end();
        } catch (error) {
            res.status(500).json({ error: "server internal error" });
            res.end();
        }
    }
};

module.exports = CommentsController;

