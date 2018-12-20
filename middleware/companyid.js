const {userModel}=require('./../Modals/userModel.js');
const {postModel}=require('./../Modals/postModel.js');
const jwt = require('jsonwebtoken');

//Authenticate is used to verify the user is valid.if valid then give access to the user
var companyid = (request, response, next) => {
    var token = request.header('x-auth');      //Checking the header if token is present 
    var decodedtoken=jwt.decode(token);
    userModel.findById({_id:decodedtoken._id}).then((user) => {
        if (!user) {
            return Promise.reject();           //if token is not matched into the user database return the error
        }
        request.Companyid = user.Company_id;                   //if user is present into the database return send username   
        next();
    }).catch((e) => {
        response.status(401).send('User error registering or check x-auth token');
    });
};

module.exports={companyid};