const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
         include: [User],
       })
         .then(dbPostData => {
           const posts = dbPostData.map(post => post.get({ plain: true }));
           res.render('all-posts', { posts });
        })
         .catch(err => {
           res.status(500).json(err);
         });
     });