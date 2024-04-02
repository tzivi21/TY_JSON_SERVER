const DB_actions = require('../Dal/PasswordsCrud');
const validation=require('../modules/validation');
 
const tokens = [1];


const Controller = {
    createToken: async (req, res) => {
        let password = await DB_actions.getPasswordById(body.userId);
        if(password === req.body.password) {
            const token = Math.random().toString();
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

module.exports = Controller;

