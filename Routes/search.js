const express = require('express');
const router = express.Router();
const {URL} = require('url');
const {userModel} = require('./../Modals/userModel.js');
const {companyModel} = require('./../Modals/companyModel.js');
const {productModel}=require('./../Modals/productModel.js');
const {serviceModel}=require('./../Modals/serviceModel.js');
const dictionary = require('dictionary-en-us');
const nspell = require('nspell');


router.get('/:word/:page',async(request,response)=>{
   
   try{
       var words = (request.params.word);
       var pageNumber = request.params.page;
       var term = words.toLowerCase();
       var tempResult=[];
       var tempresult = [];
       var tempresult2=[];
       var newWord = '';
       var suggested;
       var spaceCheck;
       var score;
       var servicescore;
       dictionary(ondictionary)
       async function ondictionary(err, dict) {
           var splittedInput = term.split(' ');
           spaceCheck = splittedInput.length - 1;
           for (var q = 0; q < splittedInput.length; q++) {
               var spell = await new nspell(dict);
               suggested = await spell.suggest(splittedInput[q]);
               console.log(suggested);
               if (suggested.length > 0) {
                   if (/\d/.test(splittedInput[q])) {
                       suggested[0] = splittedInput[q];
                   }
                   newWord += suggested[0];
               } else {
                   newWord += splittedInput[q];
               }
               if (spaceCheck > 0) {
                   newWord += ' ';
                   spaceCheck--;
               }
           }
           var productResult = await productModel.find({ $text: { $search: `"\"${newWord}\""` } });
           console.log(productResult.length);
           var serviceResult = await serviceModel.find({ $text: { $search: `"\"${newWord}\""` } });
           console.log(serviceResult.length);

           if (!productResult && !serviceResult) {
               console.log('no result found');
           }
           else {
               if (productResult.length > 0) {
                   for (var i = 0; i < productResult.length; i++) {
                       score = 0;
                       if (productResult[i].shortDescription.toLowerCase().indexOf(newWord.toLowerCase()) > -1) {
                           score = 100 * 0.40;
                       }
                       else {
                           for (var j = 0; j < splittedInput.length; j++) {
                               if (productResult[i].shortDescription.toLowerCase().indexOf(splittedInput[j].toLowerCase()) > -1) {
                                   score++;
                               }
                           }
                           score = ((score / splittedInput.length) * 80) * 0.40;
                       }

                       if (productResult[i].bookmarks >= 50) {
                           score += (100 * 0.17)
                       } else {
                           score += ((productResult[i].bookmarks * 2) * 0.17);
                       }
                       console.log('matchScore at bookmarkScore is', score);

                       if (productResult[i].views >= 100) {
                           score += 100 * 0.11;
                       } else {
                           score += (productResult[i].views * 0.11);
                       }
                       console.log('matchScore at viewScore is', score);

                       var dateDifference = (new Date() - productResult[i].Time) / (1000 * 60 * 60 * 24);
                       var months = dateDifference / 30;
                       if ((productResult[i].views / months) > 100) {
                           score += 100 * 0.06;
                       } else {
                           score += (productResult[i].views * 0.06);
                       }
                       console.log('matchScore at hits/duration is', score);
                       if(productResult[i].creator){
                        console.log('user id is====>',productResult[i].creator);
                        var user = await userModel.findById(productResult[i].creator);
                        if (user.Company_id){
                            var company=await companyModel.findById(user.Company_id[0]);
                            var companyScore = company.matchScore;
                            score += (companyScore * 0.19);
                            console.log('CompanyScore is', companyScore);
                        }else{
                            score+=0;
                        }
                       }
                       else{
                           score+=0;
                       }
                        
                       console.log('matchScore at companyProfile is', score);

                       productResult[i].matchScore = score;
                       console.log('---------------------------------------------------------------------------------------');
                   }
                   tempresult.push(productResult);
               }



//service result start from here ========>

               if (serviceResult.length > 0) {
                   for (var i = 0; i < serviceResult.length; i++) {
                       servicescore = 0;
                       if (serviceResult[i].shortDescription.toLowerCase().indexOf(newWord.toLowerCase()) > -1) {
                        servicescore = 100 * 0.40;
                       }
                       else {
                           for (var j = 0; j < splittedInput.length; j++) {
                               if (serviceResult[i].shortDescription.toLowerCase().indexOf(splittedInput[j].toLowerCase()) > -1) {
                                servicescore++;
                               }
                           }
                           servicescore = ((servicescore / splittedInput.length) * 80) * 0.40;
                       }

                       if (serviceResult[i].bookmarks >= 50) {
                        servicescore += (100 * 0.17)
                       } else {
                        servicescore += ((serviceResult[i].bookmarks * 2) * 0.17);
                       }
                       console.log('matchScore at bookmarkScore is', servicescore);

                       if (serviceResult[i].views >= 100) {
                        servicescore += 100 * 0.11;
                       } else {
                        servicescore += (serviceResult[i].views * 0.11);
                       }
                       console.log('matchScore at viewScore is', servicescore);

                       var dateDifference = (new Date() - serviceResult[i].Time) / (1000 * 60 * 60 * 24);
                       var months = dateDifference / 30;
                       if ((serviceResult[i].views / months) > 100) {
                        servicescore += 100 * 0.06;
                       } else {
                        servicescore += (serviceResult[i].views * 0.06);
                       }
                       console.log('matchScore at hits/duration is', servicescore);
                       if(serviceResult[i].Creator){
                        console.log('user id is====>', serviceResult[i].Creator);
                        var user = await userModel.findById(serviceResult[i].Creator);
                        var company = await companyModel.findById(user.Company_id);
                        if (user.Company_id){
                            var company=await companyModel.findById(user.Company_id[0]);
                            var companyScore = company.matchScore;
                            score += (companyScore * 0.19);
                            console.log('CompanyScore is', companyScore);
                        }else{
                            score+=0;
                        }
                       }
                       else{
                        servicescore+=0;
                       }
                       
                       console.log('matchScore at companyProfile is', servicescore);

                       serviceResult[i].matchScore = servicescore;
                       console.log('---------------------------------------------------------------------------------------');
                   }
                   tempresult2.push(serviceResult);
               }
 //Sending the result to the front end   =======>
               if(tempresult.length!=0){
                   for (var i = (pageNumber - 1) * 8; i < (pageNumber) * 8; i++) {
                       console.log(i);
                        tempResult.push(tempresult[0][i]);
                   }
               }
                 if(tempresult2.length!=0)
                 {
                     for (var i = (pageNumber - 1) * 2; i < (pageNumber) * 2; i++) {
                            tempResult.push(tempresult2[0][i]);
                     }
                 }  
                   
                   console.log(tempResult.length);
            }
           var byMatchScore = tempResult.slice(0);
           byMatchScore.sort(function (a, b) {
               return b.matchScore - a.matchScore;
           });
           console.log(byMatchScore);
           
            response.status(200).send(byMatchScore);
       }
   }catch(e){
    response.status(400).send(e);
   }
});



module.exports = router;