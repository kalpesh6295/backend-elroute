const express = require('express');
const router = express.Router();
const {postModel}=require('./../Modals/postModel.js');
const dictionary = require('dictionary-en-us');
const nspell = require('nspell');


router.get('/:word',(request,response)=>{

    var words = (request.params.word);
   var term=words.toLowerCase();
    var tempresult=[];
    postModel.find({
        $text: {$search: term},
    })
        .then(result =>{
            tempresult.push(result);
            var suggested;
            dictionary(ondictionary)
            async function ondictionary(err, dict) {
                var spell =await  new nspell(dict);
                 suggested= await spell.suggest(term);
                postModel.find({ Content: { $regex: term } }).then((unmatchedterm) => {
                tempresult.push(unmatchedterm);
                console.log(suggested.length);
                if(suggested.length!=0)
                {
                postModel.find({Content:suggested[0]}).then((result)=>{
                    response.status(200).send(result);
                });
                }else
                {
                    tempresult.push(suggested);
                    response.status(200).send(tempresult);
                }
                })  
            }
          
        }).catch(e => {
                console.log(e);
            })
        })
  

module.exports=router;