const express = require('express');
const router = express.Router();
const _ = require('lodash');
'use strict';
const env = require('./../config/env.js');
const { authenticate } = require('./../middleware/authenticate.js');
const {mongoose} = require('./../mongoose/mongoose-connect');
const {userModel} = require('../Modals/userModel.js');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const host = 'localhost:3000';

//Router to signup an new  into the database and send a verification email to the user email id
router.post('/signup',(request,response)=>{
    var Etoken = jwt.sign({}, 'abc123456').toString();
    var user = _.pick(request.body,['UserName','Password','Email','Mobile','Address','Emailtoken']);     //picking up the data of the new user
    var newUser = new userModel({
        UserName:user.UserName,
        Password:user.Password,
        Email:user.Email,
        Mobile:user.Mobile,
        Address:user.Address,
        Emailtoken:Etoken
    });
    newUser.save().then(()=>{
        console.log(newUser);
    return newUser.generateAuthToken();                                                  //calling function to generate an user token 
    }).then((token_recieved)=>{                                                          //token received from function called into the userModel
        response.header('x-auth',token_recieved).send(newUser); 
        nodemailer.createTestAccount((err, account) => {
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                secure: false,                                                           // true for 465, false for other ports
                auth: {
                    user: env.SENDER_EMAIL,                                              // generated ethereal user
                    pass: env.SENDER_PASSWORD                                            // generated ethereal password
                }
            });
            // setup email data with unicode symbols
            let mailOptions = {
                from: '"Tradifier.com" <vikibenz776@gmail.com>',                          // sender address
                to: user.Email,                                                           // list of receivers
                subject: 'Verification mail',                                             // Subject line
                text: "http://" + host + "/verify/" + Etoken + "/" + user.Email
            };
            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    response.status(400).send(error);
                }
                response.status(200).send("Verification mail is sended");
            });
        });
    }).catch((e)=>{
        response.status(400).send(e);
        })
        //nodemailer is used to send verification mail to the user
       
});

//ROuter to login an user which is already present into the database
router.post('/login', (request, response) => {
    if (!loggedIn) {
        var body = _.pick(request.body, ['Email', 'Password']);                             //get the user Email,Password for login
        userModel.findByCredentials(body.Email, body.Password).then((user) => {
            if (!user) {                                                                    //if user present in the database
                return response.status(400).send();
            }
            user.generateAuthToken().then((token) => {                                      //if user is present in the database then generate a token 
                loggedIn = true;
                response.header('x-auth', token).send(user);
            });
        }).catch((e) => {
            response.status(400).send(e);
        })
    }
    else {
        response.status(409).send('You Are Already Logged In, LogOut First');
    }

});

//Router delete an token whenever a user logout 
router.delete('/logout', authenticate, (request, response) => {
    var user = request.user;                                                                
    var token = request.token;
    user.removeToken(token).then((result) => {                                             //if user wants to logout then token is removed 
        loggedIn = false;
        response.status(200).send('You have been logged out succesfully!');
    }).catch((e) => {
        response.status(400).send(e);
    })
});


module.exports = router;