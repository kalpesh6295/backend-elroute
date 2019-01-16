const express = require('express');
const router = express.Router();
const {companyModel} = require('./../Modals/companyModel.js')
const {userModel} = require('./../Modals/userModel.js');
const {authenticate} = require('./../middleware/authenticate.js');


router.get('/:id',authenticate,async (request,response)=>{
try{
    var id=request.params.id;
    var userid=request.user._id;

           var userFollowing=await  userModel.findByIdAndUpdate(userid,{$pull:{Following:id}})
           response.status(200).send(userFollowing);

           var updatedCompany=await companyModel.findByIdAndUpdate(id,{$pull:{Followers:userid}});
           console.log(updatedCompany);
}catch(e){
    response.status(400).send(e);
}
})
module.exports=router;