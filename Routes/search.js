const express = require('express');
const router = express.Router();
const {URL} = require('url');
const {authenticate} = require('./../middleware/authenticate.js');
const {companyModel} = require('./../Modals/companyModel.js');



router.get('/:id',(request,response)=>{
    // console.log(request.url);
    var myUrl = new URL(request.protocol + '://' + request.get('host') + request.originalUrl);
    // var myUrl = new URL(request.url);
    // console.log(myUrl);
    console.log(myUrl.searchParams.get('product'));
    console.log(myUrl.searchParams.get('service'));
    if(myUrl.searchParams.get('product')){
        console.log('case 1 me');
        companyModel.find(
                {
                    category:request.params.id,
                    companyType:'product'
                }).then((results)=>{
                response.status(200).send(results);
            });
    }
    else if(myUrl.searchParams.get('service')){
        console.log('case 2 me');
        companyModel.find(
            {
                category:request.params.id,
                companyType:'service'
            }).then((results)=>{
            response.status(200).send(results);
        });
    }
    else{
        console.log('case3 Me');
        companyModel.find(
            {
                category:request.params.id,
            }).then((results)=>{
                var productCompanyCount=0;
                var serviceCompanyCount=0;
                var tempResult=[];
                // var moreResult=[];
                // var lessResult=[];
                for(var i =0 ; i<results.length ; i++){
                    if(results[i].companyType=='product'){
                        productCompanyCount++;
                    }
                    else if(results[i].companyType=='service'){
                        serviceCompanyCount++;
                    }
                }
                if(productCompanyCount>serviceCompanyCount){
                    for(var i =0 ; i<results.length ; i++){
                        if(results[i].companyType=='product')
                            tempResult.push(results[i]);
                    }
                    for(var i =0 ; i<results.length ; i++){
                        if(results[i].companyType=='service')
                            tempResult.push(results[i]);
                    }
                }
                else{
                    for(var i =0 ; i<results.length ; i++){
                        if(results[i].companyType=='service')
                        tempResult.push(results[i]);
                    }
                    for(var i =0 ; i<results.length ; i++){
                        if(results[i].companyType=='product')
                            tempResult.push(results[i]);
                    }
                }
                response.status(200).send(tempResult);
        });
    }
    // console.log(request.params.id);
});

module.exports = router;