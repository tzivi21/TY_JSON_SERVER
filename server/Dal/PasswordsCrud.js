const mysql = require('mysql');
require('dotenv').config();
const Connect = require('./ConnectToDB');

async function createPassword(passwordData) {
    return new Promise((resolve, reject) => {
        const connection = Connect();
        const sql = 'INSERT INTO Passwords SET ?';
        connection.query(sql, passwordData, async (err, result) => {
            connection.end();
            if (err) {
                reject(new Error('Error inserting new password:' + err));
            } else {
                newPassword = await getPasswordById(result.insertId);
                resolve(newPassword);      
            }
        });
    });
}


async function updatePassword(updatedPasswordData) {
    return new Promise((resolve, reject) => {
        const connection = Connect();
        const sql = 'UPDATE Passwords SET ? WHERE id = ?';
        connection.query(sql, [updatedPasswordData, updatedPasswordData.id], async (err, result) => {
            connection.end();
            if (err) {
                reject(new Error('Error updating password:' + err));
            } else {
                let updatedPassword = await getPasswordById(updatedPasswordData.id);
                resolve(updatedPassword);
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
   updatePassword
};