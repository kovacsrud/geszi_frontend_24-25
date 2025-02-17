const jwt=require('jsonwebtoken');
const User=require('../models/User');
const mongoose=require('mongoose');
const asyncHandler=require('express-async-handler');

const protect=asyncHandler(async (req,res,next)=>{
    let token;
    //console.log(req.headers);

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token=req.headers.authorization.split(' ')[1];
            console.log(token);
            const idFromtoken=jwt.verify(token,process.env.JWT_SECRET);
            console.log(idFromtoken);
            req.user=await User.findById(idFromtoken.id).select('-password');
            console.log(req.user);            
            next();
            
        } catch (error) {
            res.status(401);
            throw new Error("Be kell jelentkezni!!!");
        }
       

    }
    if(!token){
        res.status(401);
        throw new Error("Be kell jelentkezni!!");
    }
});

module.exports={protect};