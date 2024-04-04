const express = require("express");
const router = express.Router();
const LoginController = require("../Controllers/LoginController");
const validation = require("../modules/validation");
const UsersController = require("../Controllers/UsersController");

router.post("/", async (req, res) => {
  try {
    if (!validation.validateLoginInput(req.body)) {
      res.status(400).json({ error: "invalid input" });
      res.end();
    }
    const token = await LoginController.authenticateUser(req.body);    
    if(token == false) {
        res.status(404).json({'error': 'invalid user id or password'})
        res.end();
    }
    else {
        const user = await UsersController.getUserById(req.body.userId);
        res.setHeader('Authentication-Token', token);
        res.status(200).json(user);
        res.end();
    }

} catch (err) {
    res.status(500).json({'error': "failed to login"});
    res.end();
  }
});


module.exports = router;
