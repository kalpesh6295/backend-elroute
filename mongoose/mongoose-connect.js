// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/Tradifier',{useNewUrlParser:true});         //localhost where moongoose is stored
// mongoose.set('useCreateIndex', true);
// mongoose.set('useFindAndModify', false);
// module.exports = {mongoose};



const env = require('./config/env.js');
var mongoose = require('mongoose');

var mongoDB = env.mongoDB;

mongoose.connect(mongoDB, 
    {useNewUrlParser:true}
);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
module.exports = {mongoose};