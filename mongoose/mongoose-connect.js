const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Tradifier',{useNewUrlParser:true});         //localhost where moongoose is stored

module.exports = {mongoose};