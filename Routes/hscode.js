const express = require('express');
const { mongoose } = require('./../mongoose/mongoose-connect.js');
const router=express.Router();
const dictionary = require('dictionary-en-us');
const nspell = require('nspell');

var Product = mongoose.model('HSCODEProduct', {
    order: { type: String },
    level: { type: String },
    hscode: { type: String },
    description: { type: String },
    english_self_explanatory_text: { type: String },
    french_self_explanatory_text: { type: String },
    german_self_explanatory_text: { type: String }
})


router.get('/search/:value/:page', (request, response) => {
    var item = request.params.value;
    var pages=request.params.page;
    // Product.find({}).then((docs)=>{
    //     for(var i=0;i<docs.length;i++)
    //     {
    //         var s = docs[i].hscode + '';
    //         s = s.replace('.', '');
    //         s = parseInt(s);
    //         Product.findOneAndUpdate({hscode:docs[i].hscode},{$set:{hscode:s}}).then((docs)=>{
    //             console.log(docs);
    //         });
    //     }
    // })

    var suggested;
    dictionary(ondictionary)
    async function ondictionary(err, dict) {
        var spell = await new nspell(dict);
        suggested = await spell.suggest(item);
        console.log(suggested);
    var tempresult=[];
   if(suggested.length!=0)
   {
       Product.find({ english_self_explanatory_text: { $regex: new RegExp(`${suggested[0]}`), $options: 'i' } }).then((docs) => {
        for (var i = 0; i < docs.length; i++) {
               tempresult.push(docs[i].hscode);
           }
           Product.find({ $text: { $search: suggested[0] } }).then((docs) => {
               for (var i = 0; i < docs.length; i++) {
                   var count = 0;
                   if (tempresult.includes(docs[i].hscode)) {
                       continue;
                   }
                   else {
                       tempresult.push(docs[i].hscode);
                   }
               }
               var result=[];
               for(i=(pages-1)*20;i<(pages)*20;i++)
               {
                 result.push(tempresult[i]);
               }
               response.status(200).send(result);
           })
       })
   }else{
       Product.find({ english_self_explanatory_text: { $regex: new RegExp(`${item}`), $options: 'i' } }).then((docs) => {
        console.log(docs);   
        for (var i = 0; i < docs.length; i++) {
               tempresult.push(docs[i].hscode);
           }
           Product.find({ $text: { $search: item } }).then((docs) => {
               console.log(docs)
               for (var i = 0; i < docs.length; i++) {
                   if (tempresult.includes(docs[i].hscode)) {
                       continue;
                   }
                   else {
                       tempresult.push(docs[i].hscode);
                   }   
               }
               var result = [];
               for (i = (pages - 1) * 20; i < (pages) * 20; i++) {
                   result.push(tempresult[i]);
               }
               response.status(200).send(result);
           })
       })
   }
}
    // Product.find({ hscode: item }).then((docs) => {
    //     console.log(docs);
    // })
})


module.exports=router;