const express = require('express')
const Posts=require('../models/Posts.js')
const {getPosts, createPost, getSpecificPost ,deleteSpecificPost,updateSpecificPost} =require('../controllers/posts.js');
const router=express.Router()
//get all posts
router.get('/',getPosts)
//get specific post
router.get('/:postId',getSpecificPost)
//create a new post
router.post('/',createPost)
//delete a specific post
router.delete('/:postId',deleteSpecificPost)
//Update a specific post
router.patch('/:postId',updateSpecificPost)



module.exports=router