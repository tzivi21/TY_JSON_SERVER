const mysql = require("mysql");
require("dotenv").config();

function createDB() {
    const config = {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
    };

    const connection = mysql.createConnection(config);

    connection.connect((err) => {
        if (err) throw err;
        console.log("Successfully connected to MySQL");
        connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB}`, function (err) {
            if (err) throw err;
            console.log("Database created successfully");
            connection.end();
        });
    });
}

const createUsersTable = () => {
    const config = {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DB,
    };

    const connection = mysql.createConnection(config);
    const createUsersTable = `
        CREATE TABLE IF NOT EXISTS Users (
            id INT  PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            city VARCHAR(255),
            username VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            phone VARCHAR(20)
        )
    `;

    connection.query(createUsersTable, (err, result) => {
        if (err) throw err;
        console.log("Users table has been created successfully");
        connection.end();
    });
};

const createPostsTable = () => {
    const config = {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DB,
    };

    const connection = mysql.createConnection(config);
    const createPostsTable = `
        CREATE TABLE IF NOT EXISTS Posts (
           userId INT NOT NULL,
           id INT PRIMARY KEY,
           title VARCHAR(255) NOT NULL,
           body VARCHAR(255),
           FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE
        )
    `;

    connection.query(createPostsTable, (err, result) => {
        if (err) throw err;
        console.log("Posts table has been created successfully");
        connection.end();
    });
};

const createTodosTable = () => {
    const config = {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DB,
    };

    const connection = mysql.createConnection(config);
    const createTodosTable = `
        CREATE TABLE IF NOT EXISTS Todos (
           userId INT NOT NULL,
           id INT PRIMARY KEY,
           title VARCHAR(255) NOT NULL,
           completed BOOLEAN NOT NULL,
           FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE
        )
    `;

    connection.query(createTodosTable, (err, result) => {
        if (err) throw err;
        console.log("Todos table has been created successfully");
        connection.end();
    });
};

const createCommentsTable = () => {
    const config = {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DB,
    };

    const connection = mysql.createConnection(config);
    const createCommentsTable = `
        CREATE TABLE IF NOT EXISTS Comments (
           postId INT NOT NULL,
           id INT PRIMARY KEY,
           name VARCHAR(255) NOT NULL,
           email VARCHAR(255) NOT NULL,
           body VARCHAR(255) NOT NULL,
           FOREIGN KEY (postId) REFERENCES Posts(id) ON DELETE CASCADE
        )
    `;

    connection.query(createCommentsTable, (err, result) => {
        if (err) throw err;
        console.log("Comments table has been created successfully");
        connection.end();
    });
};


module.exports = {
    createUsersTable,
    createPostsTable,
    createTodosTable,
    createCommentsTable,
    createDB
};