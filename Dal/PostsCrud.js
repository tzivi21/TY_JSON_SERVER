const mysql = require('mysql');
require('dotenv').config();
const Connect = require('./ConnectToDB');

async function createPost(postData) {
    return new Promise((resolve, reject) => {
        const connection = Connect();
        const sql = 'INSERT INTO Posts SET ?';
        connection.query(sql, postData, (err, result) => {
            connection.end();
            if (err) {
                reject(new Error('Error inserting new post:' + err));
            } else {
                resolve(result.insertId);
            }
        });
    });
}

async function deletePost(id) {
    return new Promise((resolve, reject) => {
        const connection = Connect();
        const sql = `DELETE FROM Posts WHERE id = ${id}`;
        connection.query(sql, (err, result) => {
            connection.end();
            if (err) {
                reject(new Error(`Error deleting post with id:${id}` + err));
            } else {
                resolve();
            }
        });
    });
}

async function updatePost(updatedPostData) {
    return new Promise((resolve, reject) => {
        const connection = Connect();
        const sql = 'UPDATE Posts SET ? WHERE id = ?';
        connection.query(sql, [updatedPostData, updatedPostData.id], (err, result) => {
            connection.end();
            if (err) {
                reject(new Error('Error updating post:' + err));
            } else {
                resolve();
            }
        });
    });
}

async function getAllPosts() {
     return new Promise((resolve, reject) => {
        const connection = Connect();
        const sql = 'SELECT * FROM Posts';
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

async function getPostById(id) {
    return new Promise((resolve, reject) => {
        const connection = Connect();
        const sql = `SELECT * FROM Posts WHERE id = ${id}`;
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
   createPost,
   getAllPosts,
   getPostById,
   deletePost,
   updatePost
};