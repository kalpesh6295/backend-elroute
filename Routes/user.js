const express = require('express');
const router = express.Router();
const { userModel } = require('./../Modals/userModel.js');
const _ = require('lodash');
//Router used to get the user from the databse using id as an parameter
router.get('/:id',(request,response)=>{
    var id=request.params.id;
    console.log("i am here ====>")
    userModel.findById(id).then((userdata)=>{
       response.status(200).send(userdata);
    }).catch((e)=>{
        response.status(400).send('Error Fetching user');
    });

});

//Router used to update the data of an user which is already present into the database using id as ana parameter
router.patch('/update/:id',(request,response)=>{
    var body = _.pick(request.body, ['UserName', 'Password', 'Email', 'Mobile', 'Address']);//Getting data to updating user data 
    var id =request.params.id;
    console.log(id);
    userModel.findByIdAndUpdate(request.params.id,{
        $set:{
            UserName:body.UserName,
            Password:body.Password,
            Email:body.Email,
            Mobile:body.Mobile,
            Address:body.Address
        }
    }).then((updatedData)=>{
        response.status(200).send(updatedData);
    }).catch((e)=>{
        response.status(400).send('Error updating user');
    });
});

module.exports=router;