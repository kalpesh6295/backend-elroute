const {userModel} = require('../Modals/userModel.js');
const {postModel} = require('../Modals/postModel.js');
const {productModel} = require('../Modals/productModel.js');
const {companyModel} = require('../Modals/companyModel.js');
const {serviceModel} = require('./../Modals/serviceModel.js');
const otpGenerator = require('otp-generator');
const Nexmo=require("nexmo");
const Mockaroo = require('mockaroo');
const env = require('./../config/env.js');
const nexmo = new Nexmo({
    apiKey: env.NEXMO_API_KEY,
    apiSecret: env.NEXMO_API_SECRET
});

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
    }
    else if (bookmark === "service") {
        model = serviceModel;
        pushInto = 'bookmarks.' + bookmark;
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
};


const sendOtp = (email)=>{
    var otp = otpGenerator.generate(5, { alphabets: false, upperCase: false, specialChars: false });
    var message ='Your verification code is' + otp;
    userModel.findOneAndUpdate({Email:email},{$set:{Otp:otp}}).then();
    console.log(email);
    nexmo.message.sendSms(
        '919116053402','917062180690', message,
        (err, responseData) => {
            if (err) {
            console.log(err);
            return Promise.reject('Cannot Send OTP');
            } else {
            return Promise.resolve(message);
            }
        }
    )
};

module.exports = {bookmarkMe,findUsersViaService,sendOtp};