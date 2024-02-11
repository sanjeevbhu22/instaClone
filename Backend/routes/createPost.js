const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require('../middlewares/requireLogin');
const POST = mongoose.model("POST");

// route

//routes to fetch the data from the database
router.get("/allPosts",requireLogin,(req,res)=>{
   POST.find()
   .populate("postedBy","_id name")
   .then(posts=>res.json(posts))
   .catch(err=>console.log(err))
})

router.post("/createPost",requireLogin,(req,res)=>{
    const{body,pic}=req.body;
    console.log(pic);
    if(!body || !pic){
        return res.status(422).json({error:"please add all the fields"})
     }
   //   req.user
     const post = new POST({
        body,
        photo:pic,
        postedBy:req.user
     })
     post.save().then((result)=>{
        return res.json({post:result})
     }).catch(err => console.log(err))
    //  res.json("ok");
})

module.exports = router;