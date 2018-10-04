const express = require('express');
const bodyParser = require('body-parser');

var productsRouter = require('./../Routes/product.js');
var authenticationRouter = require('./../Routes/authenticate.js');
var postRouter = require('./../Routes/post.js');
var bookmarkRouter = require('./../Routes/bookmark.js');
var companyRouter = require('./../Routes/company.js');
// var userRouter = require('./../Routes/user.js');

var app = express();
// var authRouter = require('./../Routes/signup');

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine','jade');
// app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    // Website you wish to allow to connect
     res.setHeader('Access-Control-Allow-Origin', '*');
     
     // Request methods you wish to allow
     res.setHeader("Access-Control-Allow-Credentials", "true");
     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Boundary,Access-Control-Request-Method, Access-Control-Request-Headers,x-auth");
     res.setHeader("Access-Control-Expose-Headers", "x-auth");
      
     // Pass to next layer of middleware
     next();
  });

app.use('/products',productsRouter);
app.use('/auth',authenticationRouter);
app.use('/post',postRouter);
app.use('/bookmark',bookmarkRouter);
app.use('/company',companyRouter);
// app.use('/user',userRouter);

app.listen(3000,(status)=>{
    console.log('Server up on the port 3000');
})

module.exports = {app};