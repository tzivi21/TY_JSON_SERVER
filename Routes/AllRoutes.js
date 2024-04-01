const express = require('express');
const router = express.Router();
const UsersRoutes = require('./UsersRoutes');
const TodosRoutes = require('./TodosRoutes');
const PostsRoutes = require('./PostsRoutes');
const CommentsRoutes = require('./CommentsRoutes');

router.use('/Users', UsersRoutes.router);
// router.use('/Todos', TodosRoutes);
// router.use('/Posts', PostsRoutes);
// router.use('/Comments', CommentsRoutes);



module.exports = {
    router: router,
}; 

