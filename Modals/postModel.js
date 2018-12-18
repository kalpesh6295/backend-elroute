const mongoose = require('mongoose');
const fs = require('fs');
const express = require('express');
const router = express.Router();
const env = require('./../config/env.js');
const S3FS = require('s3fs');
const { userModel } = require('./../Modals/userModel.js');


//Post model to upload a new post into the database
var postSchema=new mongoose.Schema({
    Image:{
        type:String
    },
    Video:{
        type:String
    },
    Time:{
        type:Date,
        trim:true,
        default:Date.now()
    },
    Content:{
        type:String,
        required:true
    },
    Comment:{
        type:Array,
    },
    Views:{
        type:Number,
        default:0
    },
    Save:{
        type:String,
        default:0
    },
    admin: {
        type: String
    },
    tagId:{
        type:String
    },
    Bookmarks:{
        type:Number,
        default:0
    },
    searchMatchScore:{
        type:Number,
        default:0
    },
    bookmarkScore:{
        type:Number,
        default:0
    },
    viewScore:{
        type:Number,
        default:0
    }

});


postSchema.methods.sendPostId = function(id){
    postModel.findById(id).then((post)=>{
        if(!post){
            return null;
        }
        return post._id
    })
}

var postModel = mongoose.model('post', postSchema);

module.exports={postModel};