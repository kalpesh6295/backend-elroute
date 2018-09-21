const mongoose = require('mongoose');

var userSchema = {
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
    Mobile:{
        type:Number,
        trim:true
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
    //type:mongoose.Schema.Types.ObjectId,
    Post_id:[{type:mongoose.Schema.Types.ObjectId,auto:true}]
};

var userModel = mongoose.model('UserModel',userSchema);

module.exports = {userModel};
