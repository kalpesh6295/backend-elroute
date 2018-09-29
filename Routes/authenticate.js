const express = require('express');
const router = express.Router();
const _ = require('lodash');
// const {app} = require('./../Express/express.js');
const {mongoose} = require('./../mongoose/mongoose-connect.js');
const bodyParser = require('body-parser');
const {userModel} = require('../Modals/userModel.js');

router.post('/signup',(request,response)=>{
    var user = _.pick(request.body,['UserName','Password','Email','Mobile','Address']);
    var newUser = new userModel(user);
    console.log(user);
    newUser.save().then(()=>{

    return newUser.generateAuthToken();

    }).then((token_recieved)=>{
        response.header('x-auth',token_recieved).send(newUser);
        
        // response.status(200).send(result); 
        console.log('token is',token_recieved);
    }).catch((e)=>{
        console.log('Error Registering User',e);
        response.status(400).send();
    })
});

router.post('/login',(request,response)=>{
var body = _.pick(request.body,['Email','Password']);
    console.log(request.body)
    console.log(body);
    userModel.findByCredentials(body.Email,body.Password).then((user)=>{
        if(!user){
            return response.status(400).send();
        }
        console.log(`User found is ---> ${user}`);
        user.generateAuthToken().then((token)=>{
            response.header('x-auth',token).send(user);
        });
    }).catch((e)=>{
        console.log('Error is ',e);
        response.status(400).send();
        console.log(e);
    })

});

module.exports = router;

// app.listen(3000,(status)=>{
//     console.log('Server Up on port 3000');
// });