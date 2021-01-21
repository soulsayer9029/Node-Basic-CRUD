const mongoose  =require('mongoose')

const PostSchema=mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },   
    createdAt:{
        type:Date,
        default:Date.now
    },

})

const Post=mongoose.model('Post',PostSchema)

module.exports=Post;