const mongoose = require('mongoose');
const {userModel} = require('./../Modals/userModel.js');

//Company model schema for the user 
var companySchema = new mongoose.Schema({
    category:{ 
        type:String,
       // required:true,
    },
    companyName:{
        type:String,
       // required:true
    },
    location:{
        type:String,
       // required:true,
    },
    website: 
    {   type: String, 
    },
    companyType:{
        type:String,
    },
    admin:{
        type:mongoose.Schema.Types.ObjectId,
    },
    shortIntro:{
        type:String,
        trim:true
    },
    yearEst:{
        type:Date,
        trim:true,
    },
    address:{
        type:String
    },
    certification:{
        type:String
    },
    employeeSize:{
        type:Number
    },
    about:{
        type:String
    },
    workingHours:{
        type:Number
    },
    keywords:[{
      type:Number  
    }],
    hsCode:{
        type:Number
    },
    profilescore:{
        type:Number
    }
});

companySchema.statics.followUnfollow = function(decision,userId){
    return companyModel.findOne({"admin":userId}).then((company)=>{
        if(!company){
            return Promise.reject();
        }
        console.log('Companies are',company);
        if(decision==="follow"){
            return userModel.findByIdAndUpdate(userId,{
                $push:{
                    "Following.company":company._id
                }
            });
        }else if(decision==="unfollow"){
            return userModel.findByIdAndUpdate(userId,{
                $pull:{
                    "Following.company":company._id
                }
            });
        }
    }).catch((e)=>{
        console.log('Exception caught',e);
    });
}

companySchema.methods.calculateScore=function(body){
var company=this;

console.log(body.keywords.length);

};


var companyModel = mongoose.model('company',companySchema);

module.exports = {companyModel};
