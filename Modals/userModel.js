const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const env = require('./../config/env.js');
const Mailchimp=require('mailchimp-api-v3');
var mailchimp = new Mailchimp(env.MAILCHIMP_SECRET_KEY);
//User model to add the new user into the schema
var userSchema = new mongoose.Schema({
    UserName:{
        //It is name of user registering --> NAME in signup Form
        type:String,
       // required:true,
        unique:true,
        trim:true
    },
    Password:{
        type:String,
       // required:true
    },
    Email:{
        type:String,
       // required:true,
        unique:true,
        trim:true
    },
    isVerified: 
    {   type: Boolean, 
        default: false
    },
    Location:{
        type:String
    },
    Title:{
        type:String
    },
    // Mobile:{
    //     type:Number
    //     // unique:true
    // },
    // Address:{
    //     type:String,
    //     trim:true
    // },
    // DateOfBirth:{
    //     type:Date,
    //     trim:true,
    //     default:Date.now()
    // },
    // Image:{
    //     type:String
    // },
    Emailtoken:{
        type:String
    },
    Following:
        [{
            type:mongoose.Schema.Types.ObjectId
        }],
    // Otp:{
    //     type:Number
    // },
    Company_id:{type:mongoose.Schema.Types.ObjectId},
    bookmarks:{
        // post:[{type:mongoose.Schema.Types.ObjectId}],
        post:[],
        product:[{type:mongoose.Schema.Types.ObjectId}],
        company:[{type:mongoose.Schema.Types.ObjectId}],
        service:[{type:mongoose.Schema.Types.ObjectId}]
    },
    Followers:[{
        userObjectId:{
        type:String
    }
}],
    // Service:{
    //     type:String,
    //   //  required:true,
    //     validate:{
    //         validator: (service) => ['inspection','logistics','contentMarketing','bCommunication'].indexOf(service)>-1,
    //         message:'Check Service mentioned.'
    //     }
    // },
    // HsCode:[{
    //     type:String
    // }]
});


//function call to generate a token every time a new user register into the database
userSchema.methods.generateAuthToken = function (){
    //methods is for single particular selected document
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id:user._id.toHexString(),access},'abc123').toString();
        return token;
};

userSchema.methods.getFollowers = function() {
    var user = this;
    console.log('hi'+user.Followers);
    return new Promise((resolve,reject)=>{
        if(!user){
             reject();
        }
        resolve(user.Followers);
    });
};

userSchema.methods.setFollower = function(id){
    var user = this;
    console.log(user._id);
    return user.update({
        $push:{Followers:{id}}
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
};

userSchema.methods.subscribe = function(code) {
    var user = this;
    if (user.HsCode.indexOf(code) > -1) {
        return Promise.reject('Already subsribed to this HSCode');
    } else {
        return user.updateOne({
            $push:{HsCode:code}
        });
    }
}

userSchema.methods.unSubscribe = function(code) {
    var user = this;
    if (user.HsCode.indexOf(code) > -1) {
        return user.update({
            $pull:{HsCode:code}
        });
    } else {
        return Promise.reject('No such HSCode was subscribed before!');
    }
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
    mailchimp.post(`/lists/${fname}/members`, {
        email_address: email,
        status: 'subscribed',
        merge_fields: { TOKEN: etoken }
            }).then(function (results) {
                return results.status;
                }).catch (function (err) {
                    console.log(err);
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
