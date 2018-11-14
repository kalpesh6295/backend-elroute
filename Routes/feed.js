const express = require('express');
const router = express.Router();
const { authenticate } = require('./../middleware/authenticate.js');
const { companyModel } = require('./../Modals/companyModel.js');
const { userModel } = require('./../Modals/userModel.js');
const {postModel}=require('./../Modals/postModel.js');
const _ = require('lodash');



router.get('/:id',(request,response)=>{
    userModel.findById({_id:request.params.id}).then((docs)=>{
        var companyid=docs.Following.company;
        console.log(companyid.length);
            for(var i=0;i<companyid.length;i++)
            {
                companyModel.findById({_id:companyid[i]}).then((docs)=>{
                    var userid=docs.admin;                

                        postModel.find({ admin: userid }).sort('-Time').then((docs) => {
                            console.log(docs);
                        });
                    })
            }

    }).catch((e)=>{
        response.send(400).status("error")
    })
})

module.exports=router;