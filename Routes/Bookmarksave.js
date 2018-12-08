const express = require('express');
const router = express.Router();
const { mongoose } = require('./../mongoose/mongoose-connect.js');
const { userModel } = require('./../Modals/userModel.js');
const { authenticate } = require('./../middleware/authenticate.js');
const { companyModel } = require('./../Modals/companyModel.js');
var fs = require('fs');
const ObjectsToCsv = require('objects-to-csv');

router.get('/',authenticate,async (request,response)=>{
    var result=[];

    var temp=await userModel.find({_id:request.user.id});
    for(var i=0;i<temp[0].bookmarks.company.length;i++)
    {
        var company=await companyModel.find({_id:temp[0].bookmarks.company[i]});
        
        result.push({companyName : company[0].companyName,
        Location : company[0].location,
        website : company[0].website,
        email : company[0].email});
    }
    
            let csv = new ObjectsToCsv(result);
            await csv.toDisk('./test.csv');
            fs.createReadStream('./test.csv').pipe(response);
});

module.exports=router;
