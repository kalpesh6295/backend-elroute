const express = require('express');
const router = express.Router();
const {postModel}=require('./../Modals/postModel.js');
const {companyModel} = require('./../Modals/companyModel.js');
const dictionary = require('dictionary-en-us');
const nspell = require('nspell');

router.get('/:word',(request,response)=>{
// router.get('/:word/:page',async(request,response)=>{
    try{
    var words = (request.params.word);
    var pageNumber = request.params.page;
    var term=words.toLowerCase();
    var tempresult=[];
    var tempresult2=[];
    var newWord = '';
    var suggested;
    var spaceCheck;
    var score;
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
                        var results = await companyModel.find({ $text: { $search: `"\"${newWord}\""` } });
                        console.log(results);

                        if(results.length>0){
                            for(var i=0;i<results.length;i++){
                                score = 0;
                                if(results[i].companyName.toLowerCase().indexOf(newWord.toLowerCase())>-1){
                                    score=100*0.32;
                                }
                                else{
                                    for(var j=0;j<splittedInput.length;j++){
                                        if(results[i].companyName.toLowerCase().indexOf(splittedInput[j].toLowerCase())>-1){
                                            score++;
                                        }
                                    }
                                    score = (( score / splittedInput.length ) * 80)*0.32 ;
                                }
                                console.log('matchScore at queryMatch is',score);
        
                                if(results[i].bookmarks>=50){
                                    score += (100*0.15)
                                }else{ 
                                    score += ((results[i].bookmarks * 2)*0.15);
                                }
                                console.log('matchScore at bookmarkScore is',score);
        
                                if(results[i].views>=100){
                                    score += 100*0.13;                 //12.86 
                                }else{
                                    score += (results[i].views*0.13);
                                }
                                console.log('matchScore at viewScore is',score);
        
                                var dateDifference = (new Date() - results[i].dateRegistered )/(1000*60*60*24);
                                var months = dateDifference/30;
                                if((results[i].views/months)>100){
                                    score += 100*0.077;
                                }else{
                                    score += (results[i].Views*0.077); 
                                }
                                console.log('matchScore at hits/duration is',score);
        
                                // var company = await companyModel.findById(results[i].admin);
                                // if(company){
                                //     var companyScore = company.matchScore;
                                //     score += (companyScore*0.10); 
                                //     console.log('CompanyScore is',companyScore);
                                // }

                                var companyScore = results[i].profileScore;
                                score += (companyScore*0.25);      //24.57
                                console.log('matchScore at companyProfile is',score);
                                
                                //Location factor has not been added to companySearch beacause of no data.
                                
                                results[i].matchScore = score;
                                console.log('---------------------------------------------------------------------------------------');
                            }
                            tempresult.push(results);               
        
                            //uncomment below to use page number search
                            
                            // if(tempresult.length!=0){
                            //     for (var i = (pageNumber - 1) * 10; i < (pageNumber) * 10; i++) {
                            //         console.log(i);
                            //         tempResult.push(tempresult[0][i]);
                            //     }
                            // }
                            
                            
                            var byMatchScore = tempresult.slice(0);
                            byMatchScore[0].sort(function(a,b){
                                return b.matchScore - a.matchScore ;
                            }); 

                            console.log(byMatchScore);
           
                            response.status(200).send(byMatchScore);
                        }
                        
                    }
        }
    }catch(e){
        response.status(400).send(e);
    }
});

module.exports = router;