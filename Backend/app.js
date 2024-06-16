const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bookRoute = require('./routes/book.route.js');
const userRoute = require('./routes/user.route.js');
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const port = process.env.PORT || 3001;
const URI = process.env.MONGODBURI;

//connect mongodb
try {
    mongoose.connect(URI)
    console.log("Connection established...");

} catch (error) {
console.log(error);
}

// defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute);



app.listen(port, ()=>{
    console.log(`Server started on ${port}`);
})