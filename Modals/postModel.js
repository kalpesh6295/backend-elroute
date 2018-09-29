const mongoose = require('mongoose');


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
    Veiws:{
        type:Number,
        default:0
    },
    Save:{
        type:String,
        default:0
    }
});

postSchema.methods.sendPostId = function(id){
    // var post = this;
    postModel.findById(id).then((post)=>{
        if(!post){
            return null;
        }
        return post._id
    })
}

var postModel = mongoose.model('post', postSchema);

module.exports={postModel};