const DB_actions = require('../Dal/TodosCrud');
const validation=require('../modules/validation');
 

const TodosController = {
   
    createTodo: async (req, res) => {
        try {
            const todo  = req.body;
            if(!validation.validateTodoInput(todo)){
                res.status(400).json({ error: 'invalid input' });
                res.end();
            }
            const id=await DB_actions.createTodo(todo);
            res.status(200).json({...todo,id:id}); 
            res.end();
            
        } catch (error) {
            res.status(500).json({ error: "server internal error" });
            res.end();
        }
    },

   
    getAllTodos: async (req, res) => {
        try {
            let todos = await DB_actions.getAllTodos();
            res.status(200).json(todos);
            res.end();
        } catch (error) {
            res.status(500).json({ error: "server internal error" });
            res.end();
        }
    },

    
    getTodoById: async (req, res) => {
        try {
            const { id } = req.params;
            let todo = await DB_actions.getTodoById(id);
            res.status(200).json(todo);
            res.end();
        } catch (error) {
            res.status(500).json({ error: "server internal error" });
            res.end();
        }
    },

    
    updateTodo: async (req, res) => {
        try {
            const { id } = req.params;
            const updatedTodoData = req.body;
            if(!validation.validateTodoInput(updatedTodoData, true)){
                res.status(400).json({ error: 'invalid input' });
            }
            await DB_actions.updateTodo(updatedTodoData);
            res.status(200).json(updatedTodoData);
            res.end();
        } catch (error) {
            res.status(500).json({ error: "server internal error" });
            res.end();
        }
    },

   
    deleteTodo: async (req, res) => {
        try {
            const { id } = req.params;
            await DB_actions.deleteTodo(id);
            res.status(200).json({});
            res.end();
        } catch (error) {
            res.status(500).json({ error: "server internal error" });
            res.end();
        }
    }
};

module.exports = TodosController;

