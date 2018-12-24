const express = require('express');
const router = express.Router();
const { authenticate } = require('./../middleware/authenticate.js');
const { companyModel } = require('./../Modals/companyModel.js');
const { userModel } = require('./../Modals/userModel.js');
const {postModel}=require('./../Modals/postModel.js');
const _ = require('lodash');
var tempresult = [];


var Getpost=async (id)=>{
    var posts=await postModel.find({admin:id});
    return posts;
}

router.get('/:id',authenticate,async (request,response)=>{
    await userModel.findById({_id:request.params.id}).then((docs)=>{
        var k=0;
        var companyId=docs.Following.company;
        for(var i=0;i<companyId.length;i++)
        {
             Getpost(companyId[i]).then((result)=>{
                 tempresult.push(result);
                 k++;
                 if (k === companyId.length ) {
                     console.log(tempresult);
                     response.status(200).send(tempresult);
                 }
             });
        }
    })
});

module.exports=router;