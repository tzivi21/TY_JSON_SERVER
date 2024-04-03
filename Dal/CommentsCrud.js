const mysql = require('mysql');
require('dotenv').config();
const Connect = require('./ConnectToDB');

async function createComment(commentData) {
    return new Promise((resolve, reject) => {
        const connection = Connect();
        const sql = 'INSERT INTO Comments SET ?';
        connection.query(sql, commentData, (err, result) => {
            connection.end();
            if (err) {
                reject(new Error('Error inserting new comment:' + err));
            } else {
                resolve(result.insertId);
            }
        });
    });
}

async function deleteComment(id) {
    return new Promise((resolve, reject) => {
        const connection = Connect();
        const sql = `DELETE FROM Comments WHERE id = ?`;
        connection.query(sql, [id], (err, result) => {
            connection.end();
            if (err) {
                reject(new Error(`Error deleting comment with id:${id}` + err));
            } else {
                resolve();
            }
        });
    });
}

async function updateComment(updatedCommentData) {
    return new Promise((resolve, reject) => {
        const connection = Connect();
        const sql = 'UPDATE Comments SET ? WHERE id = ?';
        connection.query(sql, [updatedCommentData, updatedCommentData.id], async (err, result) => {
            connection.end();
            if (err) {
                reject(new Error('Error updating comment:' + err));
            } else {
                let updatedComment = await getCommentById(updatedCommentData.id);
                resolve(updatedComment);
            }
        });
    });
}

async function getAllComments() {
     return new Promise((resolve, reject) => {
        const connection = Connect();
        const sql = 'SELECT * FROM Comments';
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

async function getCommentById(id) {
    return new Promise((resolve, reject) => {
        const connection = Connect();
        const sql = `SELECT * FROM Comments WHERE id = ?`;
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
   createComment,
   getAllComments,
   getCommentById,
   deleteComment,
   updateComment
};