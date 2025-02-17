const asyncHandler=require('express-async-handler');
const fs=require('fs');
const {dirname}=require('path');
const appDir=dirname(require.main.filename);
const Image=require('../models/Image');

const fileUpload=asyncHandler(async (req,res)=>{

    //console.log(req.files);
    if(!req.files){
        throw new Error("Nincsenek fájlok");
    }

    if(req.files){
        const path=appDir+"/files/";
        if(!fs.existsSync(path+req.user.username)){
            fs.mkdir(path+req.user.username,err=>{console.log(err)});
        }
        for(prop in req.files){
            const image=await Image.findOne({userid:req.user._id,imageName:req.files[prop].name});
            if(image){
                throw new Error(req.files[prop].name+" kép már lett feltöltve!");
            }
            
            //console.log("Prop:"+req.files[prop].data);

            await fs.writeFile(path+req.user.username+"/"+req.files[prop].name,req.files[prop].data,err=>{console.log(err)});
            try {
                const ujImage=await Image.create({
                    userid:req.user._id,
                    imageName:req.files[prop].name
                });
                
            } catch (error) {
                throw new Error(error);                
            }
        }
    }

    res.json({message:"Feltöltés kész!"});

});

module.exports={fileUpload};