const mongoose=require('mongoose');
const asyncHandler=require('express-async-handler');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const User=require('../models/User');

const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"1h"});
}

const register=asyncHandler(async (req,res)=>{
    const {username,password,email,age}=req.body;
    const user=await User.findOne({username:username});
    if(user){
        res.status(400);
        throw new Error("A felhasználónév foglalt!");
    }
    const e_mail=await User.findOne({email:email});
    if(e_mail){
        res.status(400);
        throw new Error("Az email cím foglalt!");
    }
    if(!username || !password || !email){
        res.status(400);
        throw new Error("Hiányos adatok!");
    }
    const hashedPassword=await bcrypt.hash(password,10);
    const ujUser=await User.create({
        username:username,
        password:hashedPassword,
        email:email,
        age:age
    });

    const token=generateToken(ujUser.id);
    res.json(token);

});

const login=asyncHandler(async (req,res)=>{
    const{username,password}=req.body;
    const user=await User.findOne({username:username});
    if(!user){
        res.status(400);
        throw new Error('Nincs ilyen felhasználó!');
    }
    if(!await bcrypt.compare(password,user.password)){
        res.status(400);
        throw new Error("Hibás jelszó!");
    }

    const token=generateToken(user.id);
    res.status(200).json(token);

});

const modifyUser=asyncHandler(async (req,res)=>{
    const{_id,email,password,age}=req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        res.status(400);
        throw new Error("Hibás Id!");
    }
    const user=await User.findById(_id);
    if(!user){
        res.status(400);
        throw new Error("Nincs ilyen felhasználó");
    }

    if(!await bcrypt.compare(password,user.password)){
        res.status(400);
        throw new Error("Nem megfelelő jelszó");
    }

    await User.findByIdAndUpdate(_id,{age});

    res.status(200);
    res.json(await User.findById(_id));

});

const vedettFunction=asyncHandler( async (req,res)=>{
    
    const username=req.user.username;
    res.json("Védett végpont"+username);

});

module.exports={register,login,modifyUser,vedettFunction}