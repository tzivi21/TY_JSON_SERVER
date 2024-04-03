const DB_actions = require('../Dal/PasswordsCrud');
const validation=require('../modules/validation');
 

const PasswordsController = {
   
    createPassword: async (password) => {
        return await DB_actions.createPassword(password);
    },

   
    getAllPasswords: async () => {
        return await DB_actions.getAllPasswords();
    },

    
    getPasswordById: async (id) => {
        return await DB_actions.getPasswordById(id);
    },


    
    updatePassword: async (updatedPaswwordData) => {
        return await DB_actions.updatePassword(updatedPaswwordData);
    },

   
    deletePassword: async (id) => {
        await DB_actions.deletePassword(id);
    }
};

module.exports = PasswordsController;

