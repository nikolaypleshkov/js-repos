const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//GET posts
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
}); 

router.get('/v2', (req, res) => {
    res.send('Posting...v2');
});

//SEND a post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try{
        const savePost = await post.save();
        res.json(savePost);
    }catch(err){
        res.json({message: err}); 
    }

    /*
    post.save()
    .then(data => {
        res.json(data);
    }).catch(err => {
        res.json({message: err});
    });
    */
});

//Specific POST
router.get('/:postId', async (req,res) => {
    try{
      const post = await Post.findById(req.params.postId);
      res.json(post);
    }
    catch(err){
        res.json({message: err}); 
    }
});

//DELETE a spacific POST
router.delete('/:postId', async (req, res) => {
    try{
        const removePost = await Post.remove({_id: req.params.postId});
        res.json(post);
    }catch(err){
        res.json({message: err});
    }
});

//UPDATE a POST
router.patch('/:postId', async (req, res) => {
    try{
        const updatePost = await Post.updateOne({_id: req.params.postId},
                                                {$set: {title: req.body.title}
        });
        res.json(updatePost);
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;