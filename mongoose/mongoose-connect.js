const mongoose = require('mongoose');

mongoose.connect(env.MONGODB_URI);

module.exports = {mongoose};