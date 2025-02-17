const express=require('express');
const asyncHandler=require('express-async-handler');
const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const dotenv=require('dotenv').config();
const cors=require('cors');
const User=require('./models/User');
const {errorHandler}=require('./mwares/errorMiddleware');
const fileUpload=require('express-fileupload');
const path=require('path');


const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/files',express.static(path.join(__dirname,'files')));
app.use(fileUpload());
app.use('/api/user',require('./routes/userRoutes'));
app.use('/api/files',require('./routes/uploadRoutes'));
app.use('/api/images',require('./routes/imageRoutes'));
app.use('/api/imagesbin',require('./routes/imageBinRoutes'));
app.use(errorHandler);


mongoose.connect(process.env.MONGO_DB_CONNECT)
.then(()=>console.log("Connected"))
.catch(err=>console.log(err));

app.listen(8000,()=>{console.log("Running")});

app.get('/',(req,res)=>{
    res.send("MongoDb");
});
