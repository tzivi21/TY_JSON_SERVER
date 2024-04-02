const DB_actions = require('../Dal/UsersCrud');
 

const UsersController = {
   
    createUser: async (user) => {
       return await DB_actions.createUser(user);
    },
   
    getAllUsers: async () => {
        return await DB_actions.getAllUsers();  
    },

    getUserById: async (id) => {
        return await DB_actions.getUserById(id);
    },

    updateUser: async (updatedUserData) => {
        return await DB_actions.updateUser(updatedUserData);
    },

    deleteUser: async (req, res) => {
        try {
            const { id } = req.params;
            await DB_actions.deleteUser(id);
            res.status(200).json({});
            res.end();
        } catch (error) {
            res.status(500).json({ error: "server internal error" });
            res.end();
        }
    },

    getUserPosts: async (id) => {
       return await DB_actions.getUserPosts(id);
    },

    getUserTodos: async (id) => {
        return await DB_actions.getUserTodos(id);
    }

};

module.exports = UsersController;

