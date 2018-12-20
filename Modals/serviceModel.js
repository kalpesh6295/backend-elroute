const mongoose = require('mongoose');

//service Model to add new product into the schema
var serviceSchema = new mongoose.Schema({
    Image: {
        type: String
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    companyName: {
        type: String,
        required: true,
        trim: true
    },
    industry: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    Creator: {
        type: mongoose.Schema.Types.ObjectId,
        //required:true
    },
    tags:[{
        type:String
    }],
    veiws:{
        type :Number
    },
    price:{
        type:Number
    },
    bookmarks:{
        type:Number
    }
});

var serviceModel = mongoose.model('service', serviceSchema);

module.exports = { serviceModel };