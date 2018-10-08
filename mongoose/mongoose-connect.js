const mongoose = require('mongoose');
// const env=require('./../config/env.js');

// mongoose.connect('mongodb://kalpesh6295:kp6295.iitb@ds223763.mlab.com:23763/tradifier',{useNewUrlParser:true});
mongoose.connect('mongodb://localhost:27017/Tradifier',{useNewUrlParser:true});

module.exports = {mongoose};