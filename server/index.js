const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());


//Blog Schema
const BlogSchema = new mongoose.Schema({
    imageURL:String,
    year:Number,
    title:String,
    desc:String,
    like:Number,
    comment:Number
})


//Blog Model
const BlogModel = mongoose.model('BlogModel', BlogSchema)

//Blog Post
app.post("/api/blogs", async(req,res)=>{
    const {imageURL, year, title, desc, like, comment} = req.body;
    const newBlog = new BlogModel({
        imageURL:imageURL,
        year:year,
        title:title,
        desc:desc,
        like:like,
        comment:comment
    })
    await newBlog.save()
    res.status(201).send("blog succesfully created")
})

//get all blogs
app.get("/api/blogs", async(req,res)=>{
    const {title} = req.query
    const blogs = await BlogModel.find()
    if(title===undefined){
        res.status(200).send({
            data: blogs,
            message:"data get success"
        })
    }
    else{
        res.status(200).send({
            data:blogs.filter((x)=>x.title.toLowerCase().trim().includes(title.toLowerCase().trim())),
            message:"data get success"

        })
    }
})

//get blog by id
app.get("/api/blogs/:id", async(req,res)=>{
    const {id} = req.params
    const blog = await BlogModel.findById(id)
    if(!blog){
        res.status(204).send("blog not found")
    }
    else{
        res.status(200).send({
            data:blog,
            message:"data get successfully"
        })
    }
})

//delete blog

app.delete("/api/blogs/:id", async(req,res)=>{
    const id = req.params.id
    const blog = await BlogModel.findByIdAndDelete(id)
    if(blog===undefined){
        res.status(404).send("blog not found")
    }
    else{
        res.status(200).send({
            data:blog,
            message:"blog deleted successfully"
        })
    }
})

DB_CONNECTION = process.env.DB_CONNECTION;
DB_PASSWORD = process.env.DB_PASSWORD
mongoose.connect(DB_CONNECTION.replace("<password>", DB_PASSWORD)).then(()=>console.log("Mongo db connected"))
app.get('/api', (req, res) => {
  res.send('Hello World!')
})

PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})