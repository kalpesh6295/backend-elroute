const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Tradifier');

module.exports = {mongoose};