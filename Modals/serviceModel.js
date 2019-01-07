const mongoose = require('mongoose');

//service Model to add new product into the schema
var serviceSchema = new mongoose.Schema({
    serviceName: {
        type: String,
        required: true,
        trim: true
    },
    serviceImage: {
        type: String
    },
    shortDescription: {
        type: String,
        required: true,
        trim: true
    },
    serviceInfo: [{
        serviceSpecification:{
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
    price: {
        type: String
    },
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
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        //required:true
    },
    postId:{
        type:String
    },
    // tags:[{
    //     type:String
    // }],
    matchScore:{
        type:Number,
        default:0
    },
    views:{
        type :Number
    },
    Time: {
        type: Date,
        trim: true,
        default: new Date()
    },
    bookmarks:{
        type:Number
    },
    servicetype:{
        type:Number,
        default:2
    }
});

var serviceModel = mongoose.model('service', serviceSchema);

module.exports = { serviceModel };