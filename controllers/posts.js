
const Post=require('../models/Posts.js')

const getPosts=async(req,res)=>{
   try{
       const posts=await Post.find()
       res.status(200).json(posts)
   }catch(error){
    res.status(400).json({error:error.message})
   }
}

const createPost=async(req,res)=>{
    const post=new Post({
        title:req.body.title,
        description:req.body.description
    });
    
    try{
        await post.save()
        res.status(201).json(post)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}
const getSpecificPost=async(req,res)=>{
    const id=req.params.postId
    try{
        const post=await Post.findById(id)
        res.status(200).json(post)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}
const deleteSpecificPost=async(req,res)=>{
    const id=req.params.postId
    try{
        const post=await Post.remove({_id:id})
        res.status(200).json(post)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}
const updateSpecificPost=async(req,res)=>{
    const id=req.params.postId
    try{
        const post=await Post.findOneAndUpdate({_id:id},
            {$set:{
                title:req.body.title,
                description:req.body.description
            }})
        res.status(200).json(post)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

module.exports={getPosts,createPost,getSpecificPost,deleteSpecificPost,updateSpecificPost}
