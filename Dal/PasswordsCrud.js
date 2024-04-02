const mysql = require('mysql');
require('dotenv').config();
const Connect = require('./ConnectToDB');

async function createPassword(passwordData) {
    return new Promise((resolve, reject) => {
        const connection = Connect();
        const sql = 'INSERT INTO Passwords SET ?';
        connection.query(sql, passwordData, (err, result) => {
            connection.end();
            if (err) {
                reject(new Error('Error inserting new password:' + err));
            } else {
                resolve(result.insertId);
            }
        });
    });
}

async function deletePassword(id) {
    return new Promise((resolve, reject) => {
        const connection = Connect();
        const sql = `DELETE FROM Passwords WHERE id = ?`;
        connection.query(sql, [id], (err, result) => {
            connection.end();
            if (err) {
                reject(new Error(`Error deleting password of id:${id}` + err));
            } else {
                resolve();
            }
        });
    });
}

async function updatePassword(updatedPasswordData) {
    return new Promise((resolve, reject) => {
        const connection = Connect();
        const sql = 'UPDATE Passwords SET ? WHERE id = ?';
        connection.query(sql, [updatedPasswordData, updatedPasswordData.id], (err, result) => {
            connection.end();
            if (err) {
                reject(new Error('Error updating password:' + err));
            } else {
                resolve();
            }
        });
    });
}

async function getAllPasswords() {
     return new Promise((resolve, reject) => {
        const connection = Connect();
        const sql = 'SELECT * FROM Passwords';
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

async function getPasswordById(id) {
    return new Promise((resolve, reject) => {
        const connection = Connect();
        const sql = `SELECT * FROM Passwords WHERE id = ?`;
        connection.query(sql,[id] ,(err, result) => {
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
   createPassword,
   getAllPasswords,
   getPasswordById,
   deletePassword,
   updatePassword
};