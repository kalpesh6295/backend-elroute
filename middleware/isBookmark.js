const {userModel} = require('../Modals/userModel.js');
const {postModel} = require('../Modals/postModel.js');
const {productModel} = require('../Modals/productModel.js');
const {companyModel} = require('../Modals/companyModel.js');

var isBookmark = (request,response,next)=>{
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
    userModel.find({
        [pushInto]:{
            $elemMatch:(request.params.id)
        }
    }).then((user)=>{
        console.log('user is _-------->',user);
        next();
    }).catch((e)=>{
        console.log('Cannot fetch bookmark');
    })
};

var isBookmark = (bookmarks)=>{
    
};

module.exports = {isBookmark};