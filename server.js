const DB = require('./Dal/initDB');
const express = require('express');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

DB.createCommentsTable();