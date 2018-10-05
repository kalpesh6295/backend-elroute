const mongoose = require('mongoose');
const env=require('./../config/env.js');

mongoose.connect(env.MONGODB_URI);

module.exports = {mongoose};