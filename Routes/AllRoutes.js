const express = require('express');
const router = express.Router();
const UsersRoutes = require('./UsersRoutes');
const TodosRoutes = require('./TodosRoutes');
const PostsRoutes = require('./PostsRoutes');
const CommentsRoutes = require('./CommentsRoutes');
const PasswordsRoutes = require('./PasswordsRouter');


router.use('/Users', UsersRoutes);
router.use('/Todos', TodosRoutes);
router.use('/Posts', PostsRoutes);
router.use('/Comments', CommentsRoutes);
router.use('/Passwords', PasswordsRoutes);




module.exports = router;  

