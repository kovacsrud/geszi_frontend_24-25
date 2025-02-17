const express=require('express');
const router=express.Router();
const {protect}=require('../mwares/authMiddleware');
const {register,login,modifyUser,vedettFunction}=require('../controllers/userController');

router.post('/register',register);
router.post('/login',login);
router.patch('/usermodify',protect,modifyUser);
router.get('/vedett',protect,vedettFunction);

module.exports=router;