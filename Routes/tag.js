const express = require('express');
const router = express.Router();
const { authenticate } = require('./../middleware/authenticate.js');
const {productModel}=require('./../Modals/productModel.js');

router.get('/',authenticate,(request,response)=>{
    userId=request.user._id;

    productModel.find({Creator:userId}).then((docs)=>{
        response.status(200).send(docs);
    }).catch(e=>{
        response.status(200).send("please login first");
    })
})


module.exports=router;