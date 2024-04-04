const DB_actions = require('../Dal/TodosCrud');
const validation=require('../modules/validation');
 

const TodosController = {
   
    createTodo: async (todo) => {
        return await DB_actions.createTodo(todo);
    },

   
    getAllTodos: async () => {
        return await DB_actions.getAllTodos();
    },

    
    getTodoById: async (id) => {
        return await DB_actions.getTodoById(id);
    },


    
    updateTodo: async (updatedTodoData) => {
        return await DB_actions.updateTodo(updatedTodoData);
    },

   
    deleteTodo: async (id) => {
        await DB_actions.deleteTodo(id);
    }

};

module.exports = TodosController;

