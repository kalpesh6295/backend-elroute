const { userModel } = require('../Modals/userModel.js');
const express = require('express');
const router = express.Router();

//Router to verify a user email id is a valid email id .Using token and email id of the user
router.get('/:token/:email', async (request, response)=> {

        try{
        var docs = await userModel.findOne({ Email: request.params.email });
        if (docs.Emailtoken == request.params.token) {
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
        }catch(e){
            response.status(400).send("Error while verifying email address");
        }
});


module.exports=router;