const mongoose = require('mongoose');

//Product Model to add new product into the schema
var productSchema = new mongoose.Schema({
    Image: {
        type: String
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    company:{
        type:String,
        required:true,
        trim:true
    },
    industry:{
        type:String,
        trim:true
    },
    description:{
        type:String,
        trim:true
    },
    Creator:{
        type:mongoose.Schema.Types.ObjectId,
        //required:true
    },
    postId:{
        type:String
    }
});

var productModel = mongoose.model('product',productSchema);

module.exports = {productModel};