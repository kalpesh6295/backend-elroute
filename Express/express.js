const express = require('express');
const bodyParser = require('body-parser');
var helmet = require('helmet')

var productsRouter = require('./../Routes/product.js');
var authenticationRouter = require('./../Routes/authenticate.js');
var postRouter = require('./../Routes/post.js');
var bookmarkRouter = require('./../Routes/bookmark.js');
var companyRouter = require('./../Routes/company.js');
var imageuploadRouter=require('./../Routes/imageupload.js');
var emailverifyrouter=require('./../Routes/emailverify.js');
var userpageRouter=require('./../Routes/user.js')
var serviceTypeRouter = require('./../Routes/serviceType.js');
var searchRouter = require('./../Routes/search.js');
var feedRouter=require('./../Routes/feed.js');
var searchfeedRouter=require('./../Routes/searchfeed.js');
var tagRouter=require('./../Routes/tag.js');
var hscodeRouter=require('./../Routes/hscode.js');
var subscribeRouter = require('./../Routes/subscribe.js');
var unSubscribeRouter = require('./../Routes/unsubscribe.js');
var serviceRouter=require('./../Routes/service.js');
var app = express();

//multiparty is used for aws connectivity
const multiparty = require('connect-multiparty'),
    multipartyMiddleware = multiparty();

app.use(helmet());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(multipartyMiddleware);
app.use((req, res, next) => {
    // Website you wish to allow to connect
     res.setHeader('Access-Control-Allow-Origin', '*');
     // Request methods you wish to allow
     res.setHeader("Access-Control-Allow-Credentials", "true");
     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,PATCH");
     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Boundary,Access-Control-Request-Method, Access-Control-Request-Headers,x-auth");
     res.setHeader("Access-Control-Expose-Headers", "x-auth");
     // Pass to next layer of middleware
     next();
  });

// Routes 
app.use('/user',userpageRouter);            //new user route
app.use('/product',productsRouter);        //new product route
app.use('/auth',authenticationRouter);      //new signup and login route
app.use('/post',postRouter);                //new post route
app.use('/bookmark',bookmarkRouter);        //bookmark route for an user to bookmark a company
app.use('/company',companyRouter);          //new comapany route    
app.use('/userimageupload',imageuploadRouter);//new route to add user its image
app.use('/verify',emailverifyrouter);          //email verification route
app.use('/serviceType',serviceTypeRouter);
app.use('/search',searchRouter);
app.use('/feed',feedRouter);
app.use('/searchfeed',searchfeedRouter);
app.use('/tag',tagRouter);
app.use('/hscode',hscodeRouter);
app.use('/subscribe',subscribeRouter);
app.use('/unsubscribe',unSubscribeRouter);
app.use('/service',serviceRouter);
//Server listing
app.listen(3000,(status)=>{
    console.log('Server up on the port 3000');
})

module.exports={app};