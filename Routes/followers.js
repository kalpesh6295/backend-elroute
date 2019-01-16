const express = require('express');
const router = express.Router();
const {companyModel} = require('./../Modals/companyModel.js')
const {userModel} = require('./../Modals/userModel.js');
const {authenticate} = require('./../middleware/authenticate.js');

router.get('/',authenticate,async(request,response)=>{
    try{
        var companyid=request.user.Company_id;
        var company=await companyModel.findById(companyid);
        var tempResult=[];
        var lengt=company.Followers.length;
        console.log(lengt);
        for(var i=0;i<company.Followers.length;i++)
        {
            var result =await userModel.findById(company.Followers[i]);
            tempResult.push(result);
        }
        response.status(200).send(tempResult);
    }
    catch(e){
        response.status(400).send(e);
    }
})

module.exports=router;