const express = require('express');
const router = express.Router();
const { mongoose } = require('./../mongoose/mongoose-connect.js');
const { userModel } = require('./../Modals/userModel.js');
const { authenticate } = require('./../middleware/authenticate.js');
const { companyModel } = require('./../Modals/companyModel.js');
var json2csv = require('json2csv').parse;
var fs = require('fs');

router.get('/',authenticate,(request,response)=>{
    //console.log(request.user.id);
    userModel.find({_id:request.user.id}).then((items)=>{
        console.log(items[0].bookmarks.company.length);
        var k=0;
    for(var i=0;i<items[0].bookmarks.company.length;i++);
            {
                

            // console.log(items[0].bookmarks.company[i]); 
            // companyModel.find({ _id: items[0].bookmarks.company[i] }).then((docs) => {
            //     console.log(docs[0].location,docs[0].companyName,docs[0].website,docs[0].industry,docs[0].email);
            //     console.log(i);
            //     i++;
            //     })
            }
    //    var fields=['bookmarks'];
    //     var csv = json2csv({ data: items[0].bookmarks,fields:fields });
    //      console.log(csv);
    //     fs.writeFile('file.csv', csv, function (err) {
    //         if (err) throw err;
    //         console.log('file saved');
    //     });
    }) 
    
        

            // console.log(club)
            // var temp = items[0];
            // items[0] = items[items.length - 1];
            // items[items.length - 1] = temp;

            // var fields = ['hostname', 'user', 'db', 'elevated', 'superuser'];
            
});

module.exports=router;
