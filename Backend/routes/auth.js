const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoose = require("mongoose");
const jwt =  require("jsonwebtoken");
const {Jwt_secret} = require("../keys");
const requireLogin = require('../middlewares/requireLogin');
const USER = mongoose.model("USER");

router.get('/',(req,res)=>{
    res.send("Hello Sanjeev");
})

// router.get('/createPost',requireLogin,(req,res)=>{
// console.log("Hello auth");
// })

router.post('/signup',(req,res)=>{
    const {name,userName,email,password}=req.body;  
    if(!name || !userName || !email || !password){
        res.status(422).json({error:"Please add all the fields"});
    }
    USER.findOne({$or:[{email:email},{userName:userName}]}).then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"User already exist with that email or userName"})
        }
        bcrypt.hash(password,12).then((hashedPassword)=>{
            const user = new USER({
                name,
                userName,
                email,
                password:hashedPassword
            })   
            user.save()
            .then(user=>{res.json({message : "Registered Successfully"})})
            .catch(err=>{console.log(err)})
        })
         
    })

     
})
router.post('/signin',(req,res)=>{
   const {email,password} = req.body;
   if(!email || !password){
    return res.status(422).json({error:"email or password incorrect"});
   } 
   USER.findOne({email:email}).then((savedUser)=>{
    if(!savedUser){
        return res.status(422).json({error:"Invalid email and password"});
    }
    bcrypt.compare(password,savedUser.password).
    then((match)=>{
        if(match){
            // return res.status(200).json(
            //     {
            //         message:"Signed In successfully"
            //     }
            // )
            const token = jwt.sign({_id:savedUser.id},Jwt_secret);
            res.json(token);
        }
        else{
            return res.status(422).json({
                error:"Invalid password"
            })
        }
    }).catch(err=>console.log(err))
    console.log(savedUser);
   })
});

module.exports = router;