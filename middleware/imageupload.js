const fs = require('fs');
const express = require('express');
const env = require('../config/env.js');
const multiparty = require('connect-multiparty'),
    multipartyMiddleware = multiparty();
const S3FS = require('s3fs');
const app = express();
app.use(multipartyMiddleware);


//Code for the image upload for every new post
var imageupload=(request,response,next)=>{
  
    var s=request.baseUrl;
    var sub= s.substr(1);
    console.log(sub);                                          //Base of the link from where the request of image insert is coming
    const BUCKET_NAME='tradifier'+sub+'image1';                      //Creating bucket name
    const s3fsImpl = new S3FS(BUCKET_NAME, {
        accessKeyId: env.AWS_ACCESS_KEY_ID,                           //AWS Access key  
        secretAccessKey: env.AWS_SECRET_ACCESS_KEY                     //AWS Screat access key
    });
    if(request.files.Image!=null)
    {
        var myfile = request.files.Image;
        filename = request.files.Image.name;
        var filename = filename.replace(/\s/g, '');                        //replacing white spaces from the user filename
        myfile.originalFilename = Date.now() + filename;
        const awsurl = "https://s3.amazonaws.com/" + BUCKET_NAME + '/';        //AWS url plus the bucket name a user upload an image        
        var stream = fs.createReadStream(myfile.path);
        s3fsImpl.writeFile(myfile.originalFilename, stream).then(() => {
            fs.unlink(myfile.path, (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("upload successfully");
                    request.imageurl = awsurl + myfile.originalFilename;      //returning the url to the user database 
                    next();
                }
            });
        });
    }else{
        next();
    }


    
};


module.exports={imageupload};