const mongoose = require('mongoose');
const {userModel} = require('../Modals/userModel.js');
const {ObjectID} = require('mongodb');
const Mockaroo = require('mockaroo');
const {companyModel} = require('../Modals/companyModel.js');
const {productModel}=require('./../Modals/productModel.js');
const {serviceModel}=require('./../Modals/serviceModel.js');
const {postModel}=require('./../Modals/postModel.js');
const env = require('../config/env.js');

mongoose.connect('mongodb://localhost:27017/Tradifier');

var client = new Mockaroo.Client({
    apiKey:'7acec3c0'
});

//dummy data for companies --> Schema:companies on www.mocakroo.com
<<<<<<< HEAD
=======
client.generate({
    count: 500,
    schema: 'product'
}).then((records)=>{
    // console.log(records);
    for(var i=0;i<records.length;i++){
        var company = new serviceModel(records[i]);
        // console.log(company);
        company.save().then((result)=>{
            console.log('Result after saving is',result);
        })
    }
}).catch((e)=>{
    console.log('Error is',e);
});

//dummy data for posts --> Schema:Post on www.mocakroo.com
>>>>>>> 5190a68a5b3cbcf1a176cc1aae7d6ad8d7b462a4
// client.generate({
//     count: 237,
//     schema: 'companies'
// }).then((records)=>{
//     // console.log(records);
//     for(var i=0;i<records.length;i++){
//         var company = new companyModel(records[i]);
//         // console.log(company);
//         company.save().then((result)=>{
//             console.log('Result after saving is',result);
//         })
//     }
// }).catch((e)=>{
//     console.log('Error is',e);
// });

//dummy data for posts --> Schema:Post on www.mocakroo.com
client.generate({
    count: 500,
    schema: 'Post'
}).then((records)=>{
    // console.log(records);
    for(var i=0;i<records.length;i++){
        var company = new postModel(records[i]);
        // console.log(company);
        company.save().then((result)=>{
            console.log('Result after saving is',result);
        })
    }
}).catch((e)=>{
    console.log('Error is',e);
});

// var user = new userModel({
//     UserName:'abhiraj  ',
//     Password:'1234',
//     Email:'abc@123.com',
//     Mobile:1231231212,
//     Address:'durgapura jaipur'
// });

// user.save().then((doc)=>{
//     console.log('Data saved');
//     console.log(doc,undefined,2);
// },(error)=>{
//     console.log('Not Saved!');
//     console.log(error)
// });


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzA4YzZjNDczZGNjZTE5MTA1ZTE4MmUiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTQ0MDc5MDQ0fQ.X78l9tEPi3UhMklKq6S8rGBT_3_lnNPY8dG3GyzXSX4