// import mongoose from "mongoose";
const mongoose = require("mongoose");
const bookSchema = mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    category:String,
    image:String,
})

module.exports = mongoose.model('book', bookSchema)