const {userModel} = require('./userModel.js');
const {postModel} = require('./postModel.js');
const {productModel} = require('./productModel.js');
const {companyModel} = require('./companyModel.js');

var bookmarkMe = (url,objId,userId)=>{
    var model;
    var pushInto;
    var urlArray = url.split('/');
    var bookmark = urlArray[1];
    if(bookmark ==="post"){
        model = postModel;
        pushInto = 'bookmarks.'+bookmark;
    }else if(bookmark ==="product"){
        model = productModel;
        pushInto = 'bookmarks.'+bookmark;
    }else{
        model = companyModel;
        pushInto = 'bookmarks.'+bookmark;
    }
    model.findById(objId).then((result)=>{
        if(!result){
            return Response.status(404).send();
        }
    });
    return userModel.findByIdAndUpdate(userId,{
            $push:{
                [pushInto]:objId
                //here [] is used for dynamic variable --> coz pushInto value 
                //keeps changing depending upon what's here bookmark
            }
        }).then((result)=>{
            console.log(pushInto);
            return result;
        }).catch((e)=>{
            return e;
        });
    
};

module.exports = {bookmarkMe};