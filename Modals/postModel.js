const mongoose = require('mongoose');


var postSchema=new mongoose.Schema({
    UserName:{
        type:String
    },
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
    Veiws:{
        type:Number,
        default:0
    },
    Save:{
        type:String,
        default:0
    }
});

var postModel = mongoose.model('post', postSchema);

module.exports={postModel};