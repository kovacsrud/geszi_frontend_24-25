const express=require('express');
const router=express.Router();
const {getImagesBin,storeImages,deleteImageBin}=require('../controllers/imageController');
const {protect}=require('../mwares/authMiddleware');


router.get('/',protect,getImagesBin);
router.post('/',protect,storeImages);
router.delete('/',protect,deleteImageBin);

module.exports=router;