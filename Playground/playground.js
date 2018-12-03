// const mongoose = require('mongoose');
// const {userModel} = require('../Modals/userModel.js');
// const {ObjectID} = require('mongodb');
// const Mockaroo = require('mockaroo');
// const {companyModel} = require('../Modals/companyModel.js');
// const env = require('../config/env.js');

// mongoose.connect('mongodb://localhost:27017/Tradifier');

// var client = new Mockaroo.Client({
//     apiKey:'7acec3c0'
// });

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
