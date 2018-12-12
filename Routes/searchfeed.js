const express = require('express');
const router = express.Router();
const {postModel}=require('./../Modals/postModel.js');
const dictionary = require('dictionary-en-us');
const nspell = require('nspell');
const stringMatch=require('string-similarity');

router.get('/:word',(request,response)=>{

     var words = (request.params.word);
     var term=words.toLowerCase();
     var tempresult=[];
     var resultvalue=[];
            var suggested;
            dictionary(ondictionary)
            async function ondictionary(err, dict) {
                var spell =await  new nspell(dict);
                 suggested= await spell.suggest(term);
                for(var i = 0;i<suggested.length;i++){
                    suggested[i] = suggested[i].trim();
                }
                if(suggested.length!=0)
                {
                    console.log("i am here ===>");
                    postModel.find({Content: { $regex: new RegExp(`${suggested[0]}`), $options: 'i' } }).then((result)=>{
                   resultvalue.push(result);
                   resultvalue.push(suggested);
                    response.status(200).send(resultvalue);
                });
                }else
                {
                    var results = await postModel.find({ $text: { $search: `"\"${term}\""` } });
                    
                    tempresult.push(results);
                    console.log('===========>', tempresult[0].length);
                    console.log('********>', tempresult[0].length);
                    response.status(200).send(tempresult);
                }  
            }
          
        }) 
  

module.exports=router;