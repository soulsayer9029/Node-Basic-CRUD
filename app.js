const express=require('express')

const app=express()
const mongoose  =require('mongoose')
require('dotenv/config')
const bodyParser=require('body-parser')

app.use(bodyParser.json())
const port=process.env.PORT || 3000
const postRoutes=require('./routers/posts.js')
app.use('/posts',postRoutes)


mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>app.listen(port,()=>console.log("DB Connected")))
    .catch((e)=>console.log(e.message))

mongoose.set('useFindAndModify',false);

