const express = require("express");
const router = express.Router();
const LoginController = require("../Controllers/LoginController");
const validation = require("../modules/validation");

router.post("/", async (req, res) => {
  try {
    if (!validation.validateLoginInput(req.body)) {
      res.status(400).json({ error: "invalid input" });
      res.end();
    }
    const token = LoginController.createToken();
    if(!token) {
        res.status(404).json({'error': 'invalid user id or password'})
        res.end();
    }
    else {
        res.status(200)
        res.setHeader('Authentication-Token', token);
        res.end();
    }

} catch (err) {
    res.status(500).json({'error': "failed to login"});
    res.end();
  }
});


module.exports = router;
