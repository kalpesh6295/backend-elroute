const {userModel} = require('./../Modals/userModel.js');

//Authenticate is used to verify the user is valid.if valid then give access to the user
var authenticate = (request,response,next) =>{
    var token = request.header('x-auth');      //Checking the header if token is present 
    userModel.findByToken(token).then((user)=>{
        if(!user){
            return Promise.reject();           //if token is not matched into the user database return the error
        }
        request.user = user;                   //if user is present into the database return send username
        request.token = token;                 //if user is present into the database then send the token of the user
        next();
    }).catch((e)=>{
        response.status(401).send('User may not be registered or check x-auth token');         
    });
};

module.exports = {authenticate};
