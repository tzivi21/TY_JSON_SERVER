const express = require("express");
const app = express.Router();
const PasswordsController = require("../Controllers/PasswordsController");
const validation = require('../modules/validation');


app.get('/', async (req, res) => {
    try {
        let passwords = await PasswordsController.getAllPasswords();
        res.status(200).json(passwords);
        res.end();
    } catch (error) {
        res.status(500).json({ error: "server internal error" });
        res.end();
    }
});

app.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        let password = await PasswordsController.getPasswordById(id);
        if(!password) {
            res.status(404).json({ error: "password not found" });
            res.end();
        }
        else {
            res.status(200).json(password);
            res.end();
        }
    } catch (error) {
        res.status(500).json({ error: "server internal error" });
        res.end();
    }
});

app.post('/', async (req, res) => {
    try {
        const password  = req.body;
        if(!validation.validatePasswordInput(password)){
            res.status(400).json({ error: 'invalid input' });
            res.end();
        }
        else {
            await PasswordsController.createPassword(password);
            res.status(200).json(password.id); 
            res.end();
        }
        
    } catch (error) {
        res.status(500).json({ error: "server internal error" });
        res.end();
    }
});

app.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        let updatedPasswordData = req.body;
        if(!validation.validatePasswordInput(updatedPasswordData, true)){
            res.status(400).json({ error: 'invalid input' });
            res.end();
        }
        else if(await PasswordsController.getPasswordById(id)==null) {
            res.status(404).json({ error: "password not found" });
            res.end();
        }
        else {
            updatedPasswordData =await PasswordsController.updatePassword(updatedPasswordData);
            res.status(200).json(updatedPasswordData);
            res.end();
        }
    } catch (error) {
        res.status(500).json({ error: "server internal error" });
        res.end();
    }
});

//אין צורך במחיקה של ססמא כי היא אוטומטית נמחקת כשהמשתמש נמחק

// app.delete('/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         if(!PasswordsController.getPasswordById(id)) {
//             res.status(404).json({ error: "password not found" });
//             res.end();
//         }
//         else {
//             await PasswordsController.deletePassword(id);
//             res.status(200).json({});
//             res.end();
//         }
//     } catch (error) {
//         res.status(500).json({ error: "server internal error" });
//         res.end();
//     }
// });


module.exports = app; 

