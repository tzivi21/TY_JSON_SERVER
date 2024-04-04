const mysql = require('mysql');
require('dotenv').config();
const Connect = require('./ConnectToDB');

async function createTodo(todoData) {
    return new Promise((resolve, reject) => {
        const connection = Connect();
        const sql = 'INSERT INTO Todos SET ?';
        connection.query(sql, todoData, async (err, result) => {
            connection.end();
            if (err) {
                reject(new Error('Error inserting new todo:' + err));
            } else {
                newTodo = await getTodoById(result.insertId);
                resolve(newTodo);
            }
        });
    });
}

async function deleteTodo(id) {
    return new Promise((resolve, reject) => {
        const connection = Connect();
        const sql = `DELETE FROM Todos WHERE id = ?`;
        connection.query(sql, [id], (err, result) => {
            connection.end();
            if (err) {
                reject(new Error(`Error deleting todo with id:${id}` + err));
            } else {
                resolve();
            }
        });
    });
}

async function updateTodo(updatedTodoData) {
    return new Promise((resolve, reject) => {
        const connection = Connect();
        const sql = 'UPDATE Todos SET ? WHERE id = ?';
        connection.query(sql, [updatedTodoData, updatedTodoData.id], async (err, result) => {
            connection.end();
            if (err) {
                reject(new Error('Error updating todo:' + err));
            } else {
                let updatedTodo = await getTodoById(updatedTodoData.id);
                resolve(updatedTodo);
            }
        });
    });
}

async function getAllTodos() {
     return new Promise((resolve, reject) => {
        const connection = Connect();
        const sql = 'SELECT * FROM Todos';
        connection.query(sql, (err, result) => {
            connection.end();
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

async function getTodoById(id) {
    return new Promise((resolve, reject) => {
        const connection = Connect();
        const sql = `SELECT * FROM Todos WHERE id = ?`;
        connection.query(sql, [id], (err, result) => {
            connection.end();
            if (err) {
                reject(err);
            } else {
                resolve(result[0]);
            }
        });
    });
}

module.exports = {
   createTodo,
   getAllTodos,
   getTodoById,
   deleteTodo,
   updateTodo
};