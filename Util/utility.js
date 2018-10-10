const {userModel} = require('../Modals/userModel.js');
const {postModel} = require('../Modals/postModel.js');
const {productModel} = require('../Modals/productModel.js');
const {companyModel} = require('../Modals/companyModel.js');

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
                //keeps changing depending upon what's gonna get bookmarked
            }
        }).then((result)=>{
            console.log(pushInto);
            return result;
        }).catch((e)=>{
            return e;
        });
    
};

module.exports = {bookmarkMe};