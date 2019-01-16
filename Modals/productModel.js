const mongoose = require('mongoose');

//Product Model to add new product into the schema
var productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true,
        trim:true
    },
    productImage: {
        type: String
    },
    shortDescription:{
        type:String,
        trim:true
    },
    productInfo:[{
        productSpecification:{
            type:String
        },
        specificationContent:{
            type:String
        },
        fields:[{
            fieldName:{
                type:String
            },
            fieldDes:{
                type:String
            }
        }]
    }],
    price:{
        type:String
    },
    // company:{
    //     type:String,
    //     required:true,
    //     trim:true
    // },
    minPrice:{
        type:Number
    },
    maxPrice:{
        type:Number
    },
    moq:{
        type:Number
    },
    industry:{
        type:String,
        trim:true
    },
    category:{
        type:String
    },
    tfCode:{
        type:String
    },
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        //required:true
    },
    postId:{
        type:String
    },
    matchScore:{
        type:Number,
        default:0
    },
    views:{
        type:Number
    },
    Time: {
        type: Date,
        trim: true,
        default: new Date()
    },
    bookmarks:{
        type:Number
    },
    type:{
        type:Number,
        default:1
    }
});

var productModel = mongoose.model('product',productSchema);

module.exports = {productModel};