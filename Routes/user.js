const express = require('express');
const router = express.Router();
const { userModel } = require('./../Modals/userModel.js');
const _ = require('lodash');
const {authenticate} = require('./../middleware/authenticate.js');

//Router used to update the data of an user which is already present into the database using id as ana parameter
router.patch('/update',authenticate,async (request,response)=>{
   try{
    const body = await _.pick(request.body, ['UserName', 'Password', 'Email','Title','Location','Emailtoken']);//Getting data to updating user data 
        var user = request.user;
        var id = user._id;
        var updatedUser = await user.update({
            $set: {
                UserName: body.UserName,
                Password: body.Password,
                Email: body.Email,
                Title: body.Title,
                Location: body.Location,
                Emailtoken: Etoken
            },
        }).then((updatedData) => {
            return userModel.findById(id);
        })
        response.status(200).send(updatedUser);
   }catch(e){
       response.status(400).send('Error updating user');
   }
});

//Router to list the followers of a user
router.get('/followers',authenticate,async (request,response)=>{
   try{
        var user = request.user;
        var followers = await user.getFollowers();
        response.status(200).send(followers);
    }catch(e){
       response.status(400).send('Cannot Fetch followers');
   }
});

//Router to follow a user
router.patch('/follow',authenticate,async (request,response)=>{
    var user = request.user;
    user.setFollower(user._id).then((updatedUser)=>{
        response.status(200).send(`You just followed ${user.UserName}`);
    }).catch((e)=>{
        response.status(400).send('Cannot Follow, Exception');
    });
});

//Router used to get the user from the databse using id as an parameter
router.get('/',authenticate,(request,response)=>{
    var user = request.user;
    if(!user){
        response.status(400).send('Error Fetching user');
    }
        response.status(200).send(user);
});

module.exports=router;