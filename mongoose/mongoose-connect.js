const mongoose = require('mongoose');
const env=require('./../config/env.js');
console.log(env.MONGODB_URI);
mongoose.connect(env.MONGODB_URI);

module.exports = {mongoose};