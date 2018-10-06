const mongoose = require('mongoose');
// const env=require('./../config/env.js');

mongoose.connect('mongodb://localhost:27017/Tradifier',{useNewUrlParser:true});

module.exports = {mongoose};