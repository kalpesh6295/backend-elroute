const express = require('express');
const router = express.Router();
const {authenticate} = require('./../middleware/authenticate.js');
const {userModel} = require('./../Modals/userModel.js');

console.log('inside subs route');

router.post('/:code',authenticate,async(request,response)=>{
    try{
        var user = request.user;
        var code = request.url.split('/')[1];
        user.subscribe(code).then((updatedUser)=>{
            response.status(200).send('You just subsribed to HSCode');
        }).catch((e)=>{
            console.log(e);
            response.status(400).send('Error subscribing to HSCode');
            // response.status(400).send(e);
        });
    }
    catch(e){
        console.log('Exception subscribing')
    }
});

module.exports = router;