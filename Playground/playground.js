const mongoose = require('mongoose');
const { userModel } = require('../Modals/userModel.js');
const { ObjectID } = require('mongodb');
const Mockaroo = require('mockaroo');
const { companyModel } = require('../Modals/companyModel.js');
const { productModel } = require('./../Modals/productModel.js');
const { serviceModel } = require('./../Modals/serviceModel.js');
const { postModel } = require('./../Modals/postModel.js');
const env = require('../config/env.js');

mongoose.connect('mongodb://localhost:27017/Tradifier');

var client = new Mockaroo.Client({
    apiKey: '7acec3c0'
});

var randomDate = new Date("2017-03-01T08:00:00Z");

var diff = new Date() - randomDate;
console.log(diff / (1000 * 60 * 60 * 24));

// var difference = function(Date){
//     $subtract:[new Date(),"$Date"].then((result)=>{
//         console.log(result);
//     });   
// }
// difference(randomDate);

//calculating difference between dates in days
// postModel.aggregate([{$project:{dateDifference:{$subtract:[new Date(),"$Time"]}}}]).then((results)=>{
//     // console.log(NumberLong(results[0].dateDifference).toNumber());
//     console.log(results[0].dateDifference/(1000*60*60*24))
// })

// dummy data for products --> Schema:product on www.mocakroo.com
client.generate({
    count: 500,
    schema: 'Post'
}).then((records)=>{
    // console.log(records);
    for(var i=0;i<records.length;i++){
        var product = new postModel(records[i]);
        // console.log(company);
        product.save().then((result)=>{
            console.log('Result after saving is',result);
        })
    }
}).catch((e)=>{
    console.log('Error is',e);
});

// dummy data for services --> Schema:service on www.mocakroo.com
// client.generate({
//     count: 500,
//     schema: 'product'
// }).then((records)=>{
//     // console.log(records);
//     for(var i=0;i<records.length;i++){
//         var product = new productModel(records[i]);
//         // console.log(company);
//         product.save().then((result)=>{
//             console.log('Result after saving is',result);
//         })
//     }
// }).catch((e)=>{
//     console.log('Error is',e);
// });

// dummy data for services --> Schema:service on www.mocakroo.com
client.generate({
    count: 500,
    schema: 'service'
}).then((records) => {
    // console.log(records);
    for (var i = 0; i < records.length; i++) {
        var service = new serviceModel(records[i]);
        // console.log(company);
        service.save().then((result) => {
            console.log('Result after saving is', result);
        })
    }
}).catch((e) => {
    console.log('Error is', e);
});


//dummy data for companies --> Schema:Comapny on www.mocakroo.com
// client.generate({
//     count: 500,
//     schema: 'service'
// }).then((records)=>{
//     // console.log(records);
//     for(var i=0;i<records.length;i++){
//         var service = new serviceModel(records[i]);
//         // console.log(company);
//         service.save().then((result)=>{
//             console.log('Result after saving is',result);
//         })
//     }
// }).catch((e)=>{
//     console.log('Error is',e);
// });


//dummy data for companies --> Schema:Comapny on www.mocakroo.com
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
// client.generate({
//     count: 500,
//     schema: 'Post'
// }).then((records)=>{
//     // console.log(records);
//     for(var i=0;i<records.length;i++){
//         var company = new postModel(records[i]);
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


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzA4YzZjNDczZGNjZTE5MTA1ZTE4MmUiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTQ0MDc5MDQ0fQ.X78l9tEPi3UhMklKq6S8rGBT_3_lnNPY8dG3GyzXSX4