const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        minLength:3,
        required:[true,"Adjon meg usernevet!"],
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        minLength:8,
        required:[true,"Adjon meg egy jelszót!"]
    },
    email:{
        type:String,
        minLength:6,
        required:[true,"Adjon meg email címet!"],
        lowercase:true,
        unique:true
    },
    age:{
        type:Number,
        min:12,
        max:100
    }
});

module.exports=mongoose.model('User',userSchema);