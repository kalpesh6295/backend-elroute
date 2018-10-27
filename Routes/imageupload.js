const fs = require('fs');
const express = require('express');
const router = express.Router();
const env = require('./../config/env.js');
const S3FS = require('s3fs');
const { userModel } = require('./../Modals/userModel.js');
const s3fsImpl = new S3FS('tradifieruserimage1', {                      //AWS Bucket name 
    accessKeyId: env.AWS_ACCESS_KEY_ID,                                 //AWS access key               
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY                          //AWS secret key 
});


//Router used to upload image to every new user 
router.post('/:id', (request, response) => {
    console.log("i am here ===>")
    var myfile = request.files.Image;                                      //File which is given by user
    var fname = request.files.Image.name;                                 //Filename            
    var filename = fname.replace(/\s/g, '');                     //replacing gaps from the user filename  
    myfile.originalFilename = Date.now() + filename;            //Date is added in front of the filename to remove conflict                           
    const awsurl = "https://s3.amazonaws.com/tradifieruserimage1/";  //predefined aws url is given by the AWS with bucket name
    var stream = fs.createReadStream(myfile.path);
    return s3fsImpl.writeFile(myfile.originalFilename, stream).then(() => {
        fs.unlink(myfile.path, (err) => {
            if (err) {
                console.log(err);
            }
            else {
                response.status(200).send('Upload succesfully');
            }
        });
        const image = awsurl + filename;
        userModel.findByIdAndUpdate(request.params.id, {
            $set: { Image: image }                                 //Image is added into the user database
        }).then((user) => {
            console.log(user);
        }).catch((e) => {
            response.status(400).send(e);
        });
    });
});


module.exports = router;