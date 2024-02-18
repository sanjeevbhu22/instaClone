
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const cors = require('cors');
const {mongoUrl} = require('./keys');
app.use(cors());

require('./models/model');
require('./models/post');
app.use(express.json());
app.use(require('./routes/auth'));
app.use(require("./routes/createPost"))

// mongoose.connect("mongodb://127.0.0.1:27017/instaClone");
mongoose.connect(mongoUrl);
mongoose.connection.on("connected",()=>{
    console.log("Connected to mongodb");
});
mongoose.connection.on("error" ,()=>{
    console.log("not connected to mongodb");
});

app.listen(PORT,()=>{
    console.log("Server is running on the port no "+ PORT)
});