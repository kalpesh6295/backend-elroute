const express = require('express');
const router = express.Router();
const {postModel}=require('./../Modals/postModel.js');
const dictionary = require('dictionary-en-us');
const nspell = require('nspell');

router.get('/:word',(request,response)=>{

    var words = (request.params.word);
    var term=words.toLowerCase();
    var tempresult=[];
    var newWord = '';
    var suggested;
    var spaceCheck;
    var manualScore = 0;
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
                    for(var j=0;j<splittedInput.length;j++){
                        if(results[i].Content.toLowerCase().indexOf(splittedInput[j].toLowerCase())>-1){
                            results[i].matchScore++;
                        }
                    }
                    // console.log('query match score is',results[i].matchScore);
                    results[i].matchScore = ( results[i].matchScore / splittedInput.length ) * 80 ;
                    console.log(results[i].matchScore);
                }
                tempresult.push(results);               
            }
            response.status(200).send(tempresult);
            }
        }) 
  

module.exports=router;