const express=require("express")
const { UserModel } = require("../model/user.model")
const bcrypt=require("bcrypt")
const jwt = require('jsonwebtoken');
require('dotenv').config();

const userRoute=express.Router()

// Signup data

userRoute.post("/signup",async(req,res)=>{
    
    const { email,password } = req.body
     try{
        //for encripting password
        bcrypt.hash(password,5,async(err,newsecure_password)=>{

            // store hash in your database
            if(err){
                console.log(err)
            }else{
                const user= new UserModel({email,password:newsecure_password})
                await user.save()
                res.send("You are Registered")
            }
        })
        
    }catch(err){
        res.send({"Error":"Error While Registering"})
        console.log(err)
     }

})



// LOGIN Section

userRoute.post("/login", async(req,res)=>{

    const {email,password}=req.body

    try{
        const user = await UserModel.findOne({ email });
        console.log(user)
        const hashed_pass=user.password;
        
       
            bcrypt.compare(password,hashed_pass,(err,result) =>{

                if (err) {
                    res.send('something went wrong , try again');
                  }

                // random payload change to userid
                if(result){
                     // generating token using JWT web token
                     console.log(result)
                    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
                     res.send({ success: true, message: 'Valid User',token });
                  
                }else{
                     res.send({ success: false, message: 'Invalid User' });
                }
            })
        

    
    
    }catch(err){
        console.log({"Error":"Error While Login",err})
        return res.status(500).send({ success: false, message: 'Invalid User' });
    }
})


module.exports={
    userRoute
}


