const express=require('express');
const {
       getrooms,
       getroom,
       insertroom,
       deleteroom,
       getroomin
}=require('../controller/dir');
const router=express.Router();
router.route('/radius/:zipcode/:distance').get(getroomin);
router.route('/').get(getrooms);
router.route('/:id').get(getroom).post(insertroom).delete(deleteroom);
module.exports=router;