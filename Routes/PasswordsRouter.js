const express = require("express");
const app = express.Router();
const PasswordsController = require("../Controllers/PasswordsController");

app.get('/', PasswordsController.getAllPasswords);

app.get('/:id', PasswordsController.getPasswordById);

app.post('/', PasswordsController.createPassword);

app.put('/:id', PasswordsController.updatePassword);

app.delete('/:id', PasswordsController.deletePassword);


module.exports = app; 

