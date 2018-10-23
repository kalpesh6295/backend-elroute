const { userModel } = require('../Modals/userModel.js');
const express = require('express');
const router = express.Router();

//Router to verify a user email id is a valid email id .Using token and email id of the user
router.get('/:token/:email', function (request, response) {

            userModel.findOne({Email:request.params.email}).then((docs) => {
               if(docs.Emailtoken==request.params.token)
               {
                   var id = docs._id;
                   if (docs.isVerified === true)                          //Checking if user is already verified 
                   {
                       response.send("<h1> already verified");
                       response.status(200).send();
                   }
                   else {
                       Emailtoken = docs.Emailtoken;
                       if (request.params.token === Emailtoken) {
                           response.send("<h1>verified");
                           userModel.findByIdAndUpdate(id, { $set: { isVerified: true } }).then((docs) => {
                               response.status(200).send();
                           });
                       }
                       else {
                           response.send("<h1>bad request");
                           response.send(400).send();
                       }
                   }
               }
               else{
                   response.status(400).send("not a valid email id");
               }
            }).catch((e) => {
                response.status(400).send(e);
            });
});


module.exports=router;