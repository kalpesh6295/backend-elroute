const { userModel } = require('../Modals/userModel.js');
const express = require('express');
const router = express.Router();

//Router to verify a user email id is a valid email id .Using token and email id of the user
router.get('/:token/:email', function (req, res) {

            userModel.findOne({Email:req.params.email}).then((docs) => {
                var id=docs._id;
                if(docs.isVerified===true)                          //Checking if user is already verified 
                {
                    res.send("<h1> already verified");
                }
                else{
                    Emailtoken = docs.Emailtoken;                      
                    if (req.params.token === Emailtoken) {
                        res.send("<h1>verified");
                    userModel.findByIdAndUpdate(id, { $set: { isVerified: true } }).then((docs)=>{
                    });
                }
                else{
                    res.send("<h1>bad request");
                }
            }
            }).catch((e) => {
                console.log('exception caught');
                res.status(400).send(e);
            });
});


module.exports=router;