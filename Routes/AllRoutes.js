const express = require('express');
const app = express.Router();
const UsersRoutes = require('./UsersRoutes');
const TodosRoutes = require('./TodosRoutes');
const PostsRoutes = require('./PostsRoutes');
const CommentsRoutes = require('./CommentsRoutes');
const PasswordsRoutes = require('./PasswordsRouter');
const LoginRoute = require('./LoginRoute');
const LoginController = require('../Controllers/LoginController');

app.use('/login', LoginRoute);

// app.use((req, res, next) => {
//     try {
//         console.log(req.headers.authenticationToken);
//         if(LoginController.validateToken(req.headers.authenticationToken))
//             next();
//         else {
//             res.status(404).json({'error': 'invalid token'});
//         }
//     } catch {
//         res.status(500).json({'error': 'internal server error'});
//     }
// })

app.use('/users', UsersRoutes);
app.use('/todos', TodosRoutes);
app.use('/posts', PostsRoutes);
app.use('/comments', CommentsRoutes);
app.use('/passwords', PasswordsRoutes);



module.exports = app;  

