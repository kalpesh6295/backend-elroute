const express = require('express');
const router = express.Router();
const _ = require('lodash');
const { authenticate } = require('./../middleware/authenticate.js');
const {mongoose} = require('./../mongoose/mongoose-connect');
const {userModel} = require('../Modals/userModel.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {Verification}=require('./../Modals/userModel.js');
const {sendOtp}=require('./../Util/utility.js');

//Router to signup an new  into the database and send a verification email to the user email id
router.post('/signup',async (request,response)=>{
   
    try{
        var Etoken = jwt.sign({}, 'abc123456').toString();
        const user = await _.pick(request.body, ['UserName', 'Password', 'Email','Title','Location','Emailtoken']);     //picking up the data of the new user
        var newUser = await new userModel({
            UserName: user.UserName,
            Password: user.Password,
            Email: user.Email,
            Title: user.Title,
            Location: user.Location,
            Emailtoken: Etoken
        });

        newUser.save().then(() => {
            return newUser.generateAuthToken();                                                  //calling function to generate an user token 
        }).then((token_recieved) => {
            console.log(token_recieved);
            //token received from function called into the userModel
            response.setHeader('x-auth', token_recieved);
            var userEmailToVerify = user.Email;
            var fname = "7dea7efc72";
            return Verification(userEmailToVerify, Etoken, fname);
        }).then((responseCode) => {
            if (responseCode === "subscribed") {

                sendOtp(user.Email);
            }
            response.status(200).send(newUser);
        })
    }
    catch(e){
        response.status(400).send('Error Registering User');
    }
       
});

//ROuter to login an user which is already present into the database
router.post('/login', async (request, response) => {
    try{
        const body = await _.pick(request.body, ['Email', 'Password']);                     //get the user Email,Password for login
        var user = await userModel.findByCredentials(body.Email, body.Password);
        if (!user) {                                                                       //if user not present in the database
            return response.status(400).send('No Such User Found');
        }
            var token=user.generateAuthToken();
                response.header('x-auth', token).send(user);
    } catch(e){
        response.status(400).send('Error Logging in!');
    }
});

//Router delete an token whenever a user logout 
router.delete('/logout', authenticate, async (request, response) => {
   try{                                            //if user wants to logout then token is removed 
       response.status(200).send('You have been logged out succesfully!');
   }catch(e){
       response.status(400).send('Error Logging Out!');
   }
});

router.post('/forgetpassword',(request,response)=>{
    console.log("i am here==>");
    var Etoken = jwt.sign({}, 'abc123').toString();
    var email=request.body.Email;
    userModel.findOneAndUpdate({Email:request.body.Email},{$set:{Forgetpassword:Etoken}}).then((docs)=>{
        var fname = "3b744d29a3";
        Verification(email,Etoken,fname);
    })
});


router.patch('/:token/:email',async (request,response)=>{
    var password =request.body.Password;
    bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(password, salt, (error, hash) => {
            Password = hash;
        })
    });
    try{
        var docs = await userModel.findOne({ Email: request.params.email });
        if (docs.Forgetpassword == request.params.token) {
            var id = docs._id;
            console.log(id);
            userModel.findByIdAndUpdate(id, { $set: { Password: Password }, $unset: { Forgetpassword: "" } }).then(() => {
                response.status(200).send("Password succesfully changed");
            }).catch((e) => {
                response.status(400).send('Error Changing Password!');
            })
        }
        else {
            response.status(404).send("Your email does not exists");
        }
    }catch(e){
        response.status(404).send(e);
    }
    
});

router.patch('/verifyotp',async (request,response)=>{
    try{
        var otp = request.body.Otp;
        var docs = await userModel.findOne({ Otp: otp });
        if (!docs.Otp == otp) {
            response.status(400).send('Check OTP Again!!')
        }
        userModel.findOneAndUpdate({ Otp: otp }, { $unset: { Otp: "" } }).then((docs)=>{
            response.status(200).send("otp successfully verfied");
        });
    }
    catch(e){
        response.status(404).send('Check OTP Again!!');
    }        
})

module.exports = router;