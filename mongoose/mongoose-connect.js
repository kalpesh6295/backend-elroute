const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Tradifier',{useNewUrlParser:true});         //localhost where moongoose is stored
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
module.exports = {mongoose};




// var mongoose = require('mongoose');

// var mongoDB = "mongodb://kalpesh:kp6295.iitb@ds145574.mlab.com:45574/tradifier";

// mongoose.connect(mongoDB, 
//     {useNewUrlParser:true}
// );

// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// module.exports = {mongoose};