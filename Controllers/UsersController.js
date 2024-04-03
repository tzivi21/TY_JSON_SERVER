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

    deleteUser: async (id) => {
        await DB_actions.deleteUser(id);
    },

    getUserPosts: async (id) => {
        return await DB_actions.getUserPosts(id);
    },

    getUserTodos: async (id) => {
        return await DB_actions.getUserTodos(id);
    }

};

module.exports = UsersController;

