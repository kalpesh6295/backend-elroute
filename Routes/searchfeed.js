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
                var results = await postModel.find({ $text: { $search: `"\"${newWord}\""` } },{score:{"$meta":"textScore"}});
            if(results.length>0)
            tempresult.push(results); 
            
            //    if(totalCount>=splittedInput.length)
            //    {
            //        score+=100;
            //    }else
            //     {
            //        score+=50;
            //     }
            //     if(tempresult[0][i].Bookmarks>30){
            //     score+=100;
            //     }else{
            //         score+=75;
            //     }if(tempresult[0][i].Views>60)
            //     {
            //         score+=100;
            //     }else{ 
            //         score+=75;
            //     }
            //     console.log(Math.floor(score/3));
            //     tempresult[0][i].matchScore = Math.floor(score / 3);
            // }
            
            // for(var i=0;i<tempresult[0].length-1;i++)
            // {
            //     for(var j=0;j<tempresult[0].length-i-1;j++)
            //     {
            //         if(tempresult[0][j].matchScore<tempresult[0][j+1].matchScore)
            //             var temp1=tempresult[0][j];
            //             tempresult[0][j]=tempresult[0][j+1];

            

            response.status(200).send(tempresult);
            }
        }) 
  

module.exports=router;