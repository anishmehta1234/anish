const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    fullname:{type:String,require:true},
    email:{type:String,require:true},
    mobileNo:{type:String,require:true}
})

module.exports = mongoose.model('contact',contactSchema)