const asyncHandler=require('express-async-handler');
const fs=require('fs');
const mongoose=require('mongoose');
const {dirname}=require('path');
const appDir=dirname(require.main.filename);
const Image=require('../models/Image');
const ImageBin=require('../models/ImageBin');

const getImages=asyncHandler(async (req,res)=>{
    const images=await Image.find({userid:req.user._id});

    if(!images){
        throw new Error("Nincsenek feltöltött képek!");
    }

    res.json({path:"/files/"+req.user.username+"/",images:images});

});

const getImagesBin=asyncHandler(async (req,res)=>{
    const images=await ImageBin.find({userid:req.user._id});

    if(!images){
        throw new Error("Nincsenek feltöltött képek!");
    }

    res.json(images);

});

const storeImages=asyncHandler(async (req,res)=>{

    if(!req.files){
        throw new Error("Nincsenek fájlok!");
    }
    if(req.files){
        
        for(prop in req.files){
            const image=await ImageBin.findOne({userid:req.user._id,imageName:req.files[prop].name});
            if(image){
                throw new Error(req.files[prop].name+" már lett feltöltve!");
            }
            try {
                
                const newImage=await ImageBin.create({
                    userid:req.user._id,
                    imageName:req.files[prop].name,
                    imageData:req.files[prop].data
                });                
            } catch (error) {
                res.json({message:error});
                //console.log(error);
            }
        }
    }

    res.json({message:"Feltöltés rendben!"});

});

const deleteImageBin=asyncHandler(async (req,res)=>{
    const {imageId}=req.body;
    
    const image=await ImageBin.findById(imageId);    
    
    if(!image){
        throw new Error("A kép nem törölhető!");
    } else {
                
            try {                             
                await ImageBin.findOneAndDelete({userid:req.user._id,_id:imageId});
              
                res.json({message:"Fájl törlése"});
                
            } catch (error) {
                res.json({"error":error});
            } 

    }

});

const deleteImage=asyncHandler(async (req,res)=>{
    const {imageId}=req.body;
    
    const image=await Image.findById(imageId);
    
    
    if(!image){
        throw new Error("A kép nem törölhető!");
    } else {
        const path=appDir+"/files/"+req.user.username+"/";

        if(fs.existsSync(path+image.imageName)){
            try {
                
                console.log(path+image.imageName);
                await Image.findOneAndDelete({userid:req.user._id,_id:imageId});
                await fs.rm(path+image.imageName,()=>{console.log("Törlés:"+imageId)});
                res.json({message:"Fájl törlése"});
                
            } catch (error) {
                res.json({"error":error});
            } 
        }


    }

});

module.exports={getImages,getImagesBin,storeImages,deleteImage,deleteImageBin};