const express = require('express');
const router = express.Router();
const {authenticate} = require('./../middleware/authenticate.js');
const {bookmarkMe} = require('../Util/utility.js') 


//Router used to update the user post bookmark Model every time click on the bookmark
router.patch('/:type(post|product|company)/:id',authenticate,async (request,response)=>{
//if multiple routes doing same function we can use :type
// it will match the urls seprated by | (Or) mentioned here with request url
    try{
        const updatedUser = await bookmarkMe(request.url, request.params.id, request.user._id);
        if (!updatedUser) {
            response.status(400).send("Bookmark not updated");
        }
    }catch(e){
        response.status(200).send(updatedUser);
    }
});

module.exports = router;