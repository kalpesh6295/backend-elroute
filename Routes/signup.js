const {mongoose} = require('./../mongoose/mongoose-connect.js');
const bodyParser = require('body-parser');
const {userModel} = require('../Modals/userModel.js');
const _ = require('lodash');
const nodemailer=require('nodemailer');
'use strict';
const express = require('express');
const jwt=require('jsonwebtoken');
var app=express();
app.use(bodyParser.json());


const host = 'localhost:3000';
var Emailtoken;
app.post('/signup',(request,response)=>{
    var user = _.pick(request.body,['UserName','Password','Email','Mobile','Address']);
    var newUser = new userModel(user);
    console.log(user);
    newUser.save().then(()=>{

    return newUser.generateAuthToken();

    }).then((token_recieved)=>{
        response.header('x-auth',token_recieved).send(newUser);

        // response.status(200).send(result); 
        Emailtoken=token_recieved;
        console.log(Emailtoken);
    }).catch((e)=>{
        console.log('Error Registering User',e);
        response.status(400).send();
    })
    

    const mailverification=nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: false, // true for 465, false for other ports
            auth: {
                user: "vikibenz776@gmail.com", // generated ethereal user
                pass: "8298695800" // generated ethereal password
            }
        });
        
        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Tradifier.com" <vikibenz776@gmail.com>', // sender address
            to: user.Email, // list of receivers
            subject: 'Verification mail', // Subject line
            text: "http://" + host + "/verify/" +Emailtoken+"/"+user.Email
        };
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });
    });


});

app.get('/verify/:token/:email', function (req, res) {
   // console.log(req.params.token);
    //console.log(req.params.email);
   

    mongoose.connect('mongodb://localhost:27017/Tradifier', (err, db) => {
        if (err) {
            return console.log('Unable to connect to MongoDB server');
        }
        console.log('Connected to MongoDB server');
        userModel.findOne({ Email:req.params.email }).then((docs) => {
           
             Emailtoken = docs.tokens[0].token;
            // console.log(Emailtoken);
            if (req.params.token === Emailtoken) {
                res.send("<h1>verified");
            }
            else {
                res.send("bad request");
            }
        }, (err) => {
            console.log('Unable to fetch todos', err);
        });
    });  
    
});


app.listen(3000,(status)=>{
    console.log('Server Up on port 3000');
});