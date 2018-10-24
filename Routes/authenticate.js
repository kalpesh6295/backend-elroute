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
router.post('/signup',(request,response)=>{
   
    var Etoken = jwt.sign({}, 'abc123456').toString();
    var user = _.pick(request.body,['UserName','Password','Email','Mobile','Address','Emailtoken','Service']);     //picking up the data of the new user
    var newUser = new userModel({
        UserName:user.UserName,
        Password:user.Password,
        Email:user.Email,
        Mobile:user.Mobile,
        Address:user.Address,
        Emailtoken:Etoken,
        Service:user.Service
    });
    
    newUser.save().then(()=>{
    return newUser.generateAuthToken();                                                  //calling function to generate an user token 
    }).then((token_recieved)=>{
        //token received from function called into the userModel
        response.setHeader('x-auth',token_recieved); 
        var userEmailToVerify = user.Email;
        var fname = "46fcc47236";
        return Verification(userEmailToVerify,Etoken,fname);
    }).then((responseCode)=>{
        if(responseCode==="subscribed")
        {
            sendOtp(user.Email);
        }
        response.status(200).send(newUser);
    }).catch((e)=>{
        console.log(e);
        response.status(400).send('Error Registering User');
    });
       
});

//ROuter to login an user which is already present into the database
router.post('/login', (request, response) => {
        var body = _.pick(request.body, ['Email', 'Password']);                             //get the user Email,Password for login
        userModel.findByCredentials(body.Email, body.Password).then((user) => {
            if (!user) {                                                                    //if user present in the database
                return response.status(400).send('No Such User Found');
            }
            user.generateAuthToken().then((token) => {                                      //if user is present in the database then generate a token 
                response.header('x-auth', token).send(user);
                response.status(200).send('You are successfully logged in!');
            });
        }).catch((e) => {
            response.status(400).send('Error Logging in!');
        })
});

//Router delete an token whenever a user logout 
router.delete('/logout', authenticate, (request, response) => {
    var user = request.user;                                                                
    var token = request.token;
    user.removeToken(token).then((result) => {                                             //if user wants to logout then token is removed 
        response.status(200).send('You have been logged out succesfully!');
    }).catch((e) => {
        response.status(400).send('Error Logging Out!');
    })
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


router.patch('/:token/:email',(request,response)=>{
    var password =request.body.Password;
    bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(password, salt, (error, hash) => {
            Password = hash;
        })
    });
    userModel.findOne({Email:request.params.email}).then((docs)=>{
       if(docs.Forgetpassword==request.params.token)
       {
           var id = docs._id;
           userModel.findByIdAndUpdate(id, { $set: { Password: Password},$unset:{Forgetpassword:""} }).then(() => {
               response.status(200).send("Password succesfully changed");
           }).catch((e) => {
               response.status(400).send('Error Changing Password!');
           })
       }
       else{
           response.status(404).send("Your email does not exists");
       }
    })
});

router.patch('/verifyotp',(request,response)=>{
    var otp=request.body.Otp;
    userModel.findOne({Otp:otp}).then((docs)=>{
        if(!docs.Otp==otp){
            response.status(400).send('Check OTP Again!!')
        }
            userModel.findOneAndUpdate({Otp:otp},{$unset:{Otp:""}}).then((docs)=>{
                response.status(200).send("otp successfully verfied");
            });
    }).catch((e)=>{
        response.status(404).send('Check OTP Again!!');
    })
})

module.exports = router;