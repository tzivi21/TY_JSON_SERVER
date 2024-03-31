const mysql = require('mysql');
require('dotenv').config();
const Connect = require('./ConnectToDB');

//הפונקציה הזאת עובדת אבל מחזירה תמיד 0 במקום את האידי הטוב
async function createUser(userData) {
    return new Promise((resolve, reject) => {
        const connection = Connect();
        const sql = 'INSERT INTO Users SET ?';
        connection.query(sql, userData, (err, result) => {
            connection.end();
            if (err) {
                reject(new Error('Error inserting new user:' + err));
            } else {
                resolve(result.insertId);
            }
        });
    });
}

async function deleteUser(id) {
    return new Promise((resolve, reject) => {
        const connection = Connect();
        const sql = `DELETE FROM Users WHERE id = ${id}`;
        connection.query(sql, (err, result) => {
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
        connection.query(sql, [updatedUserData, updatedUserData.id], (err, result) => {
            connection.end();
            if (err) {
                reject(new Error('Error updating user:' + err));
            } else {
                resolve();
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
        const sql = `SELECT * FROM Users WHERE id = ${id}`;
        connection.query(sql, (err, result) => {
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
   createUser,
   getAllUsers,
   getUserById,
   deleteUser,
   updateUser
};