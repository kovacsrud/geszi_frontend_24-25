const express=require('express');
const router=express.Router();
const {getImages,deleteImage}=require('../controllers/imageController');
const {protect}=require('../mwares/authMiddleware');


router.get('/',protect,getImages);
router.delete('/',protect,deleteImage);

module.exports=router;