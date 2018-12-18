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
    var bookmarkScore;
    var viewScore;
    var searchMatchScore;
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
                            results[i].searchMatchScore++;
                        }
                    }
                    results[i].searchMatchScore = ( results[i].searchMatchScore / splittedInput.length ) * 80 ;
                    console.log('query match score is',results[i].searchMatchScore);

                    if(results[i].Bookmarks>=50){
                        results[i].bookmarkScore = 100;
                    }else{
                        results[i].bookmarkScore =results[i].Bookmarks * 2;
                    }
                    console.log('bookmarkScore is',results[i].bookmarkScore);

                    if(results[i].Veiws>=100){
                        results[i].viewScore = 100;
                    }else{
                        results[i].viewScore = results[i].Veiws;
                    }
                    console.log('viewScore is',results[i].viewScore);
                }
                tempresult.push(results);               
            }
            response.status(200).send(tempresult);
            }
        }) 
  

module.exports=router;