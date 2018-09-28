const express = require('express');
const bodyParser = require('body-parser');

var productsRouter = require('./../Routes/product.js');
var authenticationRouter = require('./../Routes/authenticate.js');
var postRouter = require('./../Routes/post.js');

var app = express();
// var authRouter = require('./../Routes/signup');

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine','jade');
// app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use('/products',productsRouter);
app.use('/auth',authenticationRouter);
app.use('/post',postRouter);

app.listen(3000,(status)=>{
    console.log('Server up on the port 3000');
})

module.exports = {app};