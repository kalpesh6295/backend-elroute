// const express = require('express');
// const router = express.Router();
// const {companyModel} = require('./../Modals/companyModel.js')
// const {userModel} = require('./../Modals/userModel.js');
// const {authenticate} = require('./../middleware/authenticate.js');

// var follow = (userId,companyId)=>{
//     companyModel.findById(companyId).then((company)=>{
//         if(!company){
//             return Promise.reject('No Such Company Exists');
//         }
//         userModel.findByIdAndUpdate(userId,{
//             $push:{
//                 Following:companyId
//             }
//         });
//     });
// };

// router.post('')