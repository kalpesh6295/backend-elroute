const mongoose = require('mongoose');
const {userModel} = require('./../Modals/userModel.js');

//Company model schema for the user 
var companySchema = new mongoose.Schema({
    category:{ 
        type:String,
        required:true,
    },
    companyName:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true,
    },
    website: 
    {   type: String, 
    },
    companyType:{
        type:String,
    },
    //one who creates the company
    admin:{
        type:mongoose.Schema.Types.ObjectId,
    },

    //Second part of the company
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
    keywords:{
        type:String
    }
});

companySchema.statics.followUnfollow = function(decision,userId){
    return companyModel.findOne({"stageOne.admin":userId}).then((company)=>{
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

var companyModel = mongoose.model('company',companySchema);

module.exports = {companyModel};
