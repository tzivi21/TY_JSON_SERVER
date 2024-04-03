const DB_actions = require('../Dal/PasswordsCrud');
const validation = require('../modules/validation');
const crypto = require('crypto');

const tokens = [];


const LogInController = {
    createToken: async (req, res) => {
        let password = await DB_actions.getPasswordById(body.userId);
        if (password === req.body.password) {
            const randomString = crypto.randomBytes(32).toString('hex');
            const timestamp = Math.floor(Date.now() / 1000); 
            const tokenData = `${randomString}.${timestamp}`;
            const token = crypto.createHash('sha256').update(tokenData).digest('hex');
            // const token = Math.random().toString();
            tokens.push(token);
            return token;
        }
        else {
            return null;
        }
    },

    validateToken: (recievedToken) => {
        return tokens.find(t => t == recievedToken) ? true : false;
    }

};

module.exports = LogInController;

