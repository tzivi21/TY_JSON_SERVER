const mysql = require('mysql');
require('dotenv').config();
const Connect = require('./ConnectToDB');

async function createUser(userData) {
    return new Promise((resolve, reject) => {
        const connection = Connect();
        let sql = 'INSERT INTO Users SET ?';
        connection.query(sql, userData, async (err, result) => {
            connection.end();
            if (err) {
                reject(new Error('Error inserting new user:' + err));
            } else {
                newUser = await getUserById(result.insertId);
                resolve(newUser);
            }
        });
    });
}

async function deleteUser(id) {
    return new Promise((resolve, reject) => {
        const connection = Connect();
        const sql = `DELETE FROM Users WHERE id = ?`;
        connection.query(sql, [id], (err, result) => {
            connection.end();
            if (err) {
                reject(new Error(`Error deleting user with id:${id}` + err));
            } else {
                resolve();
            }
        });
    });
}

async function updateUser(updatedUserData) {
    return new Promise((resolve, reject) => {
        const connection = Connect();
        const sql = 'UPDATE Users SET ? WHERE id = ?';
        connection.query(sql, [updatedUserData, updatedUserData.id], async (err, result) => {
            console.log(result);
            connection.end();
            if (err) {
                reject(new Error('Error updating user:' + err));
            } else {
                let updatedUser = await getUserById(updatedUserData.id);
                resolve(updatedUser);
            }
        });
    });
}

async function getAllUsers() {
     return new Promise((resolve, reject) => {
        const connection = Connect();
        const sql = 'SELECT * FROM Users';
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

async function getUserById(id) {
    return new Promise((resolve, reject) => {
        const connection = Connect();
        const sql = `SELECT * FROM Users WHERE id = ?`;
        connection.query(sql, [id], (err, result) => {
            console.log(result);
            connection.end();
            if (err) {
                reject(err);
            } else {
                resolve(result[0]);
            }
        });
    });
    
}

async function getUserPosts(id) {
    return new Promise((resolve, reject) => {
       const connection = Connect();
       const sql = `SELECT * FROM Posts WHERE userId = ?`;
       connection.query(sql,[id], (err, result) => {
           connection.end();
           if (err) {
               reject(err);
           } else {
               resolve(result);
           }
       });
   });
}

async function getUserTodos(id) {
    return new Promise((resolve, reject) => {
       const connection = Connect();
       const sql = `SELECT * FROM Todos WHERE userId = ?`;
       connection.query(sql,[id], (err, result) => {
           connection.end();
           if (err) {
               reject(err);
           } else {
               resolve(result);
           }
       });
   });
}

module.exports = {
   createUser,
   getAllUsers,
   getUserById,
   deleteUser,
   updateUser,
   getUserPosts,
   getUserTodos
};