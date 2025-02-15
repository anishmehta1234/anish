const express = require('express')
const app = express()
const mongoose = require('mongoose')
const contactRoutes = require('./routes/contact')
const userRoutes = require('./routes/user')
const bodyParser = require('body-parser')

const connectWithDataBase = async()=>{
    try{
        await mongoose.connect('mongodb+srv://anish_mehta_123:anishmehta123@cluster0.yozgz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
     console.log("connected with database......")

    }
    
    catch(err)
    {
        console.log("here")
     console.log(err)
    }
}
connectWithDataBase();

app.use(bodyParser.json())

app.use('/auth',userRoutes)
app.use('/contact',contactRoutes)

module.exports = app;