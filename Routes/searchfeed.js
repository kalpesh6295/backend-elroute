const express = require('express');
const router = express.Router();
const {postModel}=require('./../Modals/postModel.js');
const {companyModel} = require('./../Modals/companyModel.js');
const dictionary = require('dictionary-en-us');
const nspell = require('nspell');


router.get('/:word',(request,response)=>{

    var postDaysOld = [];

    
    var words = (request.params.word);
    var term=words.toLowerCase();
    var tempresult=[];
    var newWord = '';
    var suggested;
    var spaceCheck;
    var score;
    // var outputArray = [];
    // var eliminator;
    dictionary(ondictionary)            
        async function ondictionary(err, dict) {

                    var splittedInput = term.split(' ');
                    spaceCheck = splittedInput.length-1;
                    for(var q=0;q<splittedInput.length;q++){
                        var spell =await  new nspell(dict);
                        suggested= await spell.suggest(splittedInput[q]);
                        console.log(suggested);
                        if(suggested.length>0){
                            if(/\d/.test(splittedInput[q])){
                                suggested[0]=splittedInput[q];
                            }
                            newWord += suggested[0];
                        }else{
                            newWord += splittedInput[q];
                        }
                        if(spaceCheck>0){
                            newWord += ' ';
                            spaceCheck--; 
                        }
                    }
                var results = await postModel.find({ $text: { $search: `"\"${newWord}\""` } });
                if(results.length>0){
                    for(var i=0;i<results.length;i++){
                        score = 0;
                        if(results[i].Content.toLowerCase().indexOf(newWord.toLowerCase())>-1){
                            score=100*0.36;
                        }
                        else{
                            for(var j=0;j<splittedInput.length;j++){
                                if(results[i].Content.toLowerCase().indexOf(splittedInput[j].toLowerCase())>-1){
                                    score++;
                                }
                            }
                            score = (( score / splittedInput.length ) * 80)*0.36 ;
                        }

                        if(results[i].Bookmarks>=50){
                            score += (100*0.15)
                        }else{
                            score += ((results[i].Bookmarks * 2)*0.15);
                        }
                        console.log('matchScore at bookmarkScore is',score);

                        if(results[i].Views>=100){
                            score += 100*0.10;
                        }else{
                            score += (results[i].Views*0.10);
                        }
                        console.log('matchScore at viewScore is',score);

                        var dateDifference = (new Date() - results[i].Time)/(1000*60*60*24);
                        var months = dateDifference/30;
                        if((results[i].Views/months)>100){
                            score += 100*0.26;
                        }else{
                            score += (results[i].Views*0.26); 
                        }
                        console.log('matchScore at hits/duration is',score);

                        var company = await companyModel.findById(results[i].admin);
                        if(company){
                            var companyScore = company.matchScore;
                            score += (companyScore*0.10); 
                            console.log('CompanyScore is',companyScore);
                        }
                        console.log('matchScore at companyProfile is',score);
                        
                        results[i].matchScore = score;
                        console.log('---------------------------------------------------------------------------------------');
                    }
                    tempresult.push(results);               
                }
            response.status(200).send(tempresult);
            }
        }) 
  

module.exports=router;