const express = require('express');
const router = express.Router();
const {postModel}=require('./../Modals/postModel.js');

const dictionary = require('dictionary-en-us');
const nspell = require('nspell');


router.get('/:word',(request,response)=>{

    var term = request.params.word;
   
    var tempresult=[];
    postModel.find({
        $text: {$search: term },
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
                tempresult.push(suggested);
                response.status(200).send(tempresult);
                })  
            }
          
        }).catch(e => {
                console.log(e);
            })
        })
  

module.exports=router;