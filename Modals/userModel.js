const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const host = 'localhost:3000';
const _ = require('lodash');
var request = require("request");
//User model to add the new user into the schema
var userSchema = new mongoose.Schema({
    UserName:{ 
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    Password:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    isVerified: 
    {   type: Boolean, 
        default: false
    },
    Mobile:{
        type:Number,
        unique:true
    },
    Address:{
        type:String,
        trim:true
    },
    DateOfBirth:{
        type:Date,
        trim:true,
        default:Date.now()
    },
    Image:{
        type:String
    },
    Emailtoken:{
        type:String
    },
    Following:{
        company:[{type:mongoose.Schema.Types.ObjectId}]
    },
    Otp:{
        type:Number
    },
    Company_id:[{type:mongoose.Schema.Types.ObjectId,auto:true}],
    bookmarks:{
        // post:[{type:mongoose.Schema.Types.ObjectId}],
        post:[],
        product:[{type:mongoose.Schema.Types.ObjectId}],
        company:[{type:mongoose.Schema.Types.ObjectId}]
    },
    tokens:[{
        access:{
            type:String,
            required:true
        },
        token:{
            type:String,
            required:true
        }
    }],
    Service:{
        type:String,
        required:true,
        validate:{
            validator: (service) => ['inspection','logistics','contentMarketing','bCommunication'].indexOf(service)>-1,
            message:'Check Service mentioned.'
        }
    }
});


//function call to generate a token every time a new user register into the database
userSchema.methods.generateAuthToken = function (){
    //methods is for single particular selected document
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id:user._id.toHexString(),access},'abc123').toString();
    user.tokens.push({access,token});
    return user.save().then(()=>{
        return token;
    });
};

//Function to remove a token every time a user logout 
userSchema.methods.removeToken = function(token) {
    var user = this;
    if(!token){
        return Promise.reject(`Token is ${token}`);
    }
    return user.update({
        $pull:{tokens:{token}}
    });
}


//Function to findout the user is present into the database 
userSchema.statics.findByCredentials = function(email,password){
    //statics is for all the document inside a collection
    var userModel = this;
   return userModel.findOne({Email:email}).then((user)=>{
        if(!user){
            return Promise.reject();
        }
        return new Promise((resolve,reject)=>{
            bcrypt.compare(password,user.Password,(error,result)=>{
                if(result){
                    resolve(user);
                }else{
                    console.log(error);
                    reject('not found');
                }
            });
        });
    });
};


//Function to find out token is matched into the database with any user 
userSchema.statics.findByToken = function(token){
    var userModel = this;
    var decoded;
    try{
        decoded = jwt.verify(token,'abc123');
    }
    catch(e){
        return Promise.reject("Error Occured");
    }
    return userModel.findOne({
        _id:decoded._id,
        'tokens.token': token,
        'tokens.access':'auth'
    });
};


const Verification = (email, etoken, fname) => {
    var options = {
        method: 'POST',
        url: `https://us19.api.mailchimp.com/3.0/lists/${fname}/members`,
        headers:
        {
            'postman-token': 'ce747207-7591-dba2-4720-6a162a84c944',
            'cache-control': 'no-cache',
            authorization: 'Basic YW55c3RyaW5nOjU1ODQ4NzFjOThmNTgzMjA5MWY4NDRkMjJhMTAzYTcxLXVzMTk=',
            'content-type': 'application/json'
        },
        body:
        {
            email_address: email,
            status: 'subscribed',
            merge_fields: { TOKEN: etoken }
        },
        json: true
    };
    
    return new Promise((resolve,reject)=>{
    request(options, function (error, response, body) {
            if (error) {
                response.status(400).send("please enter a valid Email address");
                throw new Error(error);
            }
           return resolve(body.status);
        })
    
    })
};


//Method to Hash the password every time a new user is added 
userSchema.pre('save',function(next){
    var user = this;
    if(user.isModified('Password')){
        var password = user.Password;
        bcrypt.genSalt(10,(error,salt)=>{
            bcrypt.hash(password,salt,(error,hash)=>{
                user.Password = hash;
                next();
            })
        })
    }else{
        next();
    }
});


var userModel = mongoose.model('user',userSchema);

module.exports = {userModel,Verification};
