// const mongoose = require('mongoose');
// const MongoClient = require('mongodb').MongoClient;
// var uriTestDb="mongodb+srv://elroute_alpha:elroute@311218@cluster0-h7er2.mongodb.net/test?retryWrites=true";
var uriTestDb = "mongodb://kalpesh13:elroute@311218@ds145574.mlab.com:45574/tradifier";

// mongoose.set('useCreateIndex', true);
// mongoose.set('useFindAndModify', false);
// module.exports = {MongoClient};
// var uriTestDb = "mongodb://<dbuser>:<dbpassword>@ds145574.mlab.com:45574/backend_elroute";
// mongoose.connect("mongodb://kalpesh:kp6295.iitb8@ds145574.mlab.com:45574/tradifier",{useNewUrlParser:true});        //localhost where moongoose is stored
// mongoose.set('useCreateIndex', true);
// mongoose.set('useFindAndModify', false);





var mongoose = require('mongoose');

var mongoDB = "mongodb://kalpesh:kp6295.iitb@ds145574.mlab.com:45574/tradifier";

mongoose.connect(mongoDB, 
    {useNewUrlParser:true}
);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
module.exports = {mongoose};