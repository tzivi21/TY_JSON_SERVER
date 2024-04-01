const express = require("express");
const router = express.Router();
const PasswordsController = require("../Controllers/PasswordsController");

router.get('/', PasswordsController.getAllPasswords);

router.get(':id', PasswordsController.getPasswordById);

router.post('/', PasswordsController.createPassword);

router.put('/:id', PasswordsController.updatePassword);

router.delete('/:id', PasswordsController.deletePassword);


module.exports = router; 

