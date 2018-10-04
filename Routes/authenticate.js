const express = require('express');
const router = express.Router();
const _ = require('lodash');
const {userModel} = require('../Modals/userModel.js');
const {authenticate} = require('./../middleware/authenticate.js');
var loggedIn;

router.post('/signup',(request,response)=>{
    if(!loggedIn){
        var user = _.pick(request.body,['UserName','Password','Email','Mobile','Address']);
        var newUser = new userModel(user);
        console.log(user);
        newUser.save().then(()=>{

            loggedIn = true;
            return newUser.generateAuthToken();

        }).then((token_recieved)=>{
            response.header('x-auth',token_recieved).send(newUser);
            
            // response.status(200).send(result); 
            console.log('token is',token_recieved);
        }).catch((e)=>{
            console.log('Error Registering User',e);
            response.status(400).send();
        })
    }
        else{
            console.log('You Are Already Logged In, LogOut First');
            response.status(409).send('You Are Already Logged In, LogOut First');
        }

});

router.post('/login',(request,response)=>{
    if(!loggedIn){
        var body = _.pick(request.body,['Email','Password']);
            console.log(request.body)
            console.log(body);
            userModel.findByCredentials(body.Email,body.Password).then((user)=>{
                if(!user){
                    return response.status(400).send();
                }
                console.log(`User found is ---> ${user}`);
                user.generateAuthToken().then((token)=>{
                    loggedIn = true;
                    response.header('x-auth',token).send(user);
                });
            }).catch((e)=>{
                console.log('Error is ',e);
                response.status(400).send();
                console.log(e);
            })
    }
    else{
        console.log('You Are Already Logged In, LogOut First');
        response.status(409).send('You Are Already Logged In, LogOut First');
    }

});

router.delete('/logout',authenticate,(request,response)=>{
    var user = request.user;
    var token = request.token;
    console.log('token is ',token);
    user.removeToken(token).then((result)=>{
        loggedIn = false;
        console.log(result);
        response.status(200).send('You have been logged out succesfully!');
    }).catch((e)=>{
        response.status(400).send(e);
    })
});

module.exports = router;

// app.listen(3000,(status)=>{
//     console.log('Server Up on port 3000');
// });