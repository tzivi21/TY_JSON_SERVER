const DB_actions = require('../Dal/PasswordsCrud');
// const validation=require('../modules/validation');
 

const PasswordsController = {
   
    createPassword: async (req, res) => {
        try {
            const password  = req.body;
            // if(!validation.validateUserData(user)){
                res.status(400).json({ error: 'invalid input' });
                res.end();
            // }
            const id=await DB_actions.createPassword(password);
            res.status(200).json({...password,id:id}); 
            res.end();
            
        } catch (error) {
            res.status(500).json({ error: error.message });
            res.end();
        }
    },

   
    getAllPasswords: async (req, res) => {
        try {
            let passwords = await DB_actions.getAllPasswords();
            res.status(200).json(passwords);
            res.end();
        } catch (error) {
            res.status(500).json({ error: error.message });
            res.end();
        }
    },

    
    getPasswordById: async (req, res) => {
        try {
            const { id } = req.params;
            let password = await DB_actions.getPasswordById(id);
            res.status(200).json(password);
            res.end();
        } catch (error) {
            res.status(500).json({ error: error.message });
            res.end();
        }
    },

    
    updatePassword: async (req, res) => {
        try {
            const { id } = req.params;
            const updatedPasswordData = req.body;
            // if(!validation.validateUserData(updatedUserData)){
                res.status(400).json({ error: 'invalid input' });
            // }
            await DB_actions.updatePassword(updatedPasswordData);
            res.status(200).json(updatedPasswordData);
            res.end();
        } catch (error) {
            res.status(500).json({ error: error.message });
            res.end();
        }
    },

   
    deletePassword: async (req, res) => {
        try {
            const { id } = req.params;
            await DB_actions.deletePassword(id);
            res.status(200);
            res.end();
        } catch (error) {
            res.status(500).json({ error: error.message });
            res.end();
        }
    }
};

module.exports = PasswordsController;

