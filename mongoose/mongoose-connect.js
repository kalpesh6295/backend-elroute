const mongoose = require('mongoose');
var uriTestDb="mongodb+srv://elroute_alpha:elroute@311218@cluster0-h7er2.mongodb.net/test?retryWrites=true"
mongoose.connect(uriTestDb, function(err, db) {
    db.close();
 });
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
module.exports = {mongoose};