const DB_actions = require('../Dal/UsersCrud');
// const validation=require('../modules/validation');
 

const UsersController = {
   
    createUser: async (req, res) => {
        try {
            const user  = req.body;
            // if(!validation.validateUserData(user)){
                res.status(400).json({ error: 'invalid input' });
                res.end();
            // }
            await DB_actions.createUser(user);
            res.status(200).json(user); // צריך לשנות שיחזיר גם את המספר הרץ שנוצר
            res.end();
            
        } catch (error) {
            res.status(500).json({ error: error.message });
            res.end();
        }
    },

   
    getAllUsers: async (req, res) => {
        try {
            let users = await DB_actions.getAllUsers();
            res.status(200).json(users);
            res.end();
        } catch (error) {
            res.status(500).json({ error: error.message });
            res.end();
        }
    },

    
    getUserById: async (req, res) => {
        try {
            const { id } = req.params;
            let user = await DB_actions.getUserById(id);
            res.status(200).json(user);
            res.end();
        } catch (error) {
            res.status(500).json({ error: error.message });
            res.end();
        }
    },

    
    updateUser: async (req, res) => {
        try {
            const { id } = req.params;
            const updatedUserData = req.body;
            // if(!validation.validateUserData(updatedUserData)){
                res.status(400).json({ error: 'invalid input' });
            // }
            updatedUserData = await DB_actions.updateUser(updatedUserData);
            res.status(200).json(updatedUserData);
            res.end();
        } catch (error) {
            res.status(500).json({ error: error.message });
            res.end();
        }
    },

   
    deleteUser: async (req, res) => {
        try {
            const { id } = req.params;
            await DB_actions.deleteUser(id);
            res.status(200);
            res.end();
        } catch (error) {
            res.status(500).json({ error: error.message });
            res.end();
        }
    }
};

module.exports = UsersController;
