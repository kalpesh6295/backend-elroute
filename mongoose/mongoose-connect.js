const mongoose = require('mongoose');

<<<<<<< HEAD
// mongoose.connect('mongodb://kalpesh6295:kp6295.iitb@ds223763.mlab.com:23763/tradifier',{useNewUrlParser:true});
mongoose.connect('mongodb://localhost:27017/Tradifier',{useNewUrlParser:true});
=======
mongoose.connect('mongodb://localhost:27017/Tradifier',{useNewUrlParser:true});         //localhost where moongoose is stored
>>>>>>> a55b1e80f5982242970d6e43752348b7e3197ad9

module.exports = {mongoose};