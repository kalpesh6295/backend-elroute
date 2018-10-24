const {userModel} = require('../Modals/userModel.js');
const {postModel} = require('../Modals/postModel.js');
const {productModel} = require('../Modals/productModel.js');
const {companyModel} = require('../Modals/companyModel.js');
const otpGenerator = require('otp-generator');

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
            return 'Unable to fetch entity (inside bookmarkMe fxn)'; 
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

var findUsersViaService = (url)=>{
    var urlArray = url.split('/');
    console.log(urlArray);
    return userModel.find({Service:urlArray[1]}).then((users)=>{
        if(!users){
            return Promise.reject('Cannot find users');
        }
        return users;
    })
    //return userModel.find({Service:service});
};

var sendOtp = ()=>{
    var otp = otpGenerator.generate(5, {alphabets:false, upperCase: false, specialChars: false });
    nexmo.message.sendSms(
        '919116053402', '919116053402', otp,
        (err, responseData) => {
            if (err) {
            console.log(err);
            return Promise.reject('Cannot Send OTP');
            } else {
            console.dir(responseData);
            return Promise.resolve(otp);
            }
        }
    )
};

module.exports = {bookmarkMe,findUsersViaService,sendOtp};