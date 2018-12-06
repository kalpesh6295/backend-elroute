const express = require('express');
const router = express.Router();
const { mongoose } = require('./../mongoose/mongoose-connect.js');
const { userModel } = require('./../Modals/userModel.js');
const { authenticate } = require('./../middleware/authenticate.js');
const { companyModel } = require('./../Modals/companyModel.js');
var json2csv = require('json2csv').parse;
var fs = require('fs');


router.get('/',authenticate,async (request,response)=>{
    //console.log(request.user.id);

    var result=[];

    var temp=await userModel.find({_id:request.user.id});
    console.log(temp[0].bookmarks.company.length);

    for(var i=0;i<temp[0].bookmarks.company.length;i++)
    {
        var company=await companyModel.find({_id:temp[0].bookmarks.company[i]});
        result.push(company[0].companyName);
        result.push(company[0].location);
        result.push(company[0].website);
        result.push(company[0].email);
    }

    var fields = ['companyName','location','website','email'];
    var csv = json2csv({ data: result, fields: fields });
    console.log(csv);
    await fs.writeFile('file.csv', csv, function (err) {
        if (err) throw err;
        console.log('file saved');
    });
            
});

module.exports=router;
