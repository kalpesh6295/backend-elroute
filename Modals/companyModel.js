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
      type:String  
    }],
    hsCode:[{
        type:Number
    }],
    profileScore:{
        type:Number
    },
    matchScore:{
        type:Number
    },
    dateRegistered:{
        type:Date,
        default:Date.now()
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

companySchema.methods.calculateScore=function(company){
    // var company=this;
    // console.log(company);
    // console.log(company.keywords.length);
    var matchScore = 0;
    if(company.category != null){
        matchScore+=10;
    }
    if(company.companyName != null){
        matchScore+=10;
    }
    if(company.location != null){
        matchScore+=10;
    }
    if(company.website != null){
        matchScore+=10;
    }
    if(company.companyType != null){
        matchScore+=10;
    }
    if(company.shortIntro != null){
        matchScore+=10;
    }
    if(company.certification != null){
        matchScore+=10;
    }
    if(company.about != null){
        matchScore+=10;
    }
    if(company.keywords != null){
        // console.log(company.keywords.length);
        if(company.keywords.length<=10){
            console.log('Numebr of keywords entered',company.keywords.length);
            matchScore+=company.keywords.length;
        }
    }
    if(company.hsCode != null){
        matchScore+=10;
    }
    console.log('matchScore is ',matchScore);
    return Promise.resolve(matchScore);
};


var companyModel = mongoose.model('company',companySchema);

module.exports = {companyModel};
