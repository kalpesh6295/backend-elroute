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
    country:{
        type:String,
        // required:true
    },
    city:{
        type:String,
        // required:true
    },
    companyEmail:{
        type:String,
        // required:true
    },
    website: 
    { 
        type: String, 
    },
    companyType:{
        type:String,
    },
    image:{
        type:String
    },
    companySize:{
        type:Number
    },
    yearEstd:{
        type:Date,
        // trim:true,
    },
    address:{
        type:String
    },
    city:{
        type:String
    },
    zipCode:{
        type:Number
    },
    landLine:{
        type:Number
    },
    mobile:{
        type:Number
    },
    admin:{
        type:mongoose.Schema.Types.ObjectId,
    },
    shortIntro:{
        type:String,
        trim:true
    },
    certification:{
        type:String
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
        default:new Date()
    },
    bookmarks:{
        type:Number
    },
    views:{
        type:Number
    },
    location:{
        type:String,
       // required:true,
    },
});

companySchema.statics.followUnfollow = function(decision,userId){
    return companyModel.findOne({"admin":userId}).then((company)=>{
        if(!company){
            return Promise.reject();
        }
        // console.log('Companies are',company);
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
    var profileScore = 0;
    if(company.category != null){
        profileScore+=10;
    }
    if(company.companyName != null){
        profileScore+=10;
    }
    if(company.location != null){
        profileScore+=10;
    }
    if(company.website != null){
        profileScore+=10;
    }
    if(company.companyType != null){
        profileScore+=10;
    }
    if(company.shortIntro != null){
        profileScore+=10;
    }
    if(company.certification != null){
        profileScore+=10;
    }
    if(company.about != null){
        profileScore+=10;
    }
    if(company.keywords != null){
        // console.log(company.keywords.length);
        if(company.keywords.length<=10){
            // console.log('Numebr of keywords entered',company.keywords.length);
            profileScore+=company.keywords.length;
        }
    }
    if(company.hsCode != null){
        profileScore+=10;
    }
    // console.log('profileScore is ',profileScore);
    return Promise.resolve(profileScore);
};

companySchema.methods.getSimiliarSubscribedUsers = async function(body){
    if(body.hsCode!=null){

        var users = [];
        console.log('Company Entered HsCodes are :',body.hsCode);
        for(var i=0; i<body.hsCode.length; i++)
        {
            var foundUser = await userModel.find({HsCode:body.hsCode[i]});

            foundUser.forEach(function(item){
                users.push(
                    {
                        userName:item.UserName,
                        id:item._id,
                        hsCode:body.hsCode[i]
                    }
                );
            });
        }
    }
    return Promise.resolve(users);
};

var companyModel = mongoose.model('company',companySchema);

module.exports = {companyModel};
