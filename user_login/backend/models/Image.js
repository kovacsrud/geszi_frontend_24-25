const mongoose=require('mongoose');

const imageSchema=new mongoose.Schema({
    userid:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    imageName:{
        type:String,
        minLength:5,
        required:[true,"Meg kell adni a fájlnevet!"]
    }
});

module.exports=mongoose.model('Image',imageSchema);