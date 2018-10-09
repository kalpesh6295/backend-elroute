const mongoose = require('mongoose');
const {ObjectID} = require('mongodb');
const express = require('express');
const router = express.Router();
const {authenticate} = require('./../middleware/authenticate.js');
const _ = require('lodash');
const {userModel} = require('../Modals/userModel.js');
const {postModel} = require('./../Modals/postModel.js');
const {productModel} = require('./../Modals/productModel.js');
const {bookmarkMe} = require('../Modals/utility.js') 

var productId,postId;

//Router used to update the user post bookmark Model every time click on the bookmark
router.patch('/post/:id',authenticate,(request,response)=>{

    bookmarkMe(request.url,request.params.id,request.user._id).then((updatedUser)=>{
        if(!updatedUser){
            response.status(400).send();
        }
        console.log(updatedUser);
        response.status(200).send();
    });
});

//Router used to update the user product bookmark Model every time click on the bookmark
router.patch('/product/:id',authenticate,(request,response)=>{

    bookmarkMe(request.url,request.params.id,request.user._id).then((updatedUser)=>{
        if(!updatedUser){
            response.status(400).send();
        }
        console.log(updatedUser);
        response.status(200).send();
    });

    // productId = request.params.id;
    // productModel.findById(productId).then((product)=>{
    //     if(!product){
    //         return response.status(404).send();
    //     }
    // })
    // userModel.findByIdAndUpdate(request.user._id,{
    //     $push:{
    //         'bookmarks.product':productId
    //     }
    // }).then((user)=>{
    //     response.status(200).send(user);
    // }).catch((e)=>{
    //     response.status(400).send(e);
    // })
});

router.patch('/company/:id',authenticate,(request,response)=>{

    bookmarkMe(request.url,request.params.id,request.user._id).then((updatedUser)=>{
        if(!updatedUser){
            response.status(400).send();
        }
        console.log(updatedUser);
        response.status(200).send();
    });
});


module.exports = router;