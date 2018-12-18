const express = require('express');
const router = express.Router();
const {URL} = require('url');
const {productModel}=require('./../Modals/productModel.js');
const {serviceModel}=require('./../Modals/serviceModel.js');
const dictionary = require('dictionary-en-us');
const nspell = require('nspell');


router.get('/:value/:page',async(request,response)=>{
   
   try{
       var query = request.params.value;
       var pageNumber = request.params.page;
       var tempResult = [];
       console.log("i am here in all");
       dictionary(ondictionary)
       async function ondictionary(err, dict) {

        //    var splittedInput = term.split(' ');
        //    spaceCheck = splittedInput.length - 1;
           var productResult = await productModel.find({ $text: { $search: `"\"${query}\""` } });
           console.log(productResult.length);
           var serviceResult = await serviceModel.find({ $text: { $search: `"\"${query}\""` } });
           console.log(serviceResult.length);

           if (productResult == 0 && serviceResult == 0) {
               console.log('no result found');
           }
           else {
               if (productResult.length > serviceResult.length) {
                   for (var i = (pageNumber - 1) * 8; i < pageNumber * 8; i++) {
                       tempResult.push(productResult[i]);
                   }
                   for (var i = (pageNumber - 1) * 2; i < pageNumber * 2; i++) {
                       tempResult.push(serviceResult[i]);
                   }
                   console.log(tempResult.length);
                   response.status(200).send(tempResult);
               }
           }
       }
   }catch(e){
    response.status(400).send(e);
   }

//     if(myUrl.searchParams.get('product')){
//         console.log('case 1 me');
//         companyModel.find(
//                 {
//                     category:{$regex:/request.params.id^/},
//                     companyType:'product'
//                 }).then((results)=>{
//                 response.status(200).send(results);
//             });
//     }
//     else if(myUrl.searchParams.get('service')){
//         console.log('case 2 me');
//         companyModel.find(
//             {
//                 category: { $regex: /request.params.id^/ },
//                 companyType:'service'
//             }).then((results)=>{
//             response.status(200).send(results);
//         });
//     }
//     else{
//         console.log('case3 Me');
//         companyModel.find(
//             {
//                 category: { $regex: request.params.id },
//             }).then((results)=>{
//                 var productCompanyCount=0;
//                 var serviceCompanyCount=0;
//                 var tempResult=[];
//                 for(var i =0 ; i<results.length ; i++){
//                     if(results[i].companyType=='product'){
//                         productCompanyCount++;
//                     }
//                     else if(results[i].companyType=='service'){
//                         serviceCompanyCount++;
//                     }
//                 }
//                 if(productCompanyCount>serviceCompanyCount){
//                     for(var i =0 ; i<results.length ; i++){
//                         if(results[i].companyType=='product')
//                             tempResult.push(results[i]);
//                     }
//                     for(var i =0 ; i<results.length ; i++){
//                         if(results[i].companyType=='service')
//                             tempResult.push(results[i]);
//                     }
//                 }
//                 else{
//                     for(var i =0 ; i<results.length ; i++){
//                         if(results[i].companyType=='service')
//                         tempResult.push(results[i]);
//                     }
//                     for(var i =0 ; i<results.length ; i++){
//                         if(results[i].companyType=='product')
//                             tempResult.push(results[i]);
//                     }
//                 }
//                 dictionary(ondictionary)
//                 async function ondictionary(err, dict) {
//                     var spell = await new nspell(dict);
//                     var suggested = await spell.suggest(request.params.id);
//                     tempResult.push(suggested);
//                 response.status(200).send(tempResult);
//                 }
//         });
//     }
// //     // console.log(request.params.id);
});



module.exports = router;