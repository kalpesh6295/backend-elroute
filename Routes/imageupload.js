const fs = require('fs');
const express = require('express');
const S3FS = require('s3fs');
const {userModel}=require('./../Modals/userModel.js');
const {mongoose}=require('./../mongoose/mongoose-connect.js');
const s3fsImpl = new S3FS('tradifieruserimage123', {
    accessKeyId: '',
    secretAccessKey: ''
});
const multiparty = require('connect-multiparty'),
    multipartyMiddleware = multiparty();

const app = express();

app.use(multipartyMiddleware);

const awsurl ="https://s3.amazonaws.com/tradifieruserimage123/";


app.post('/userimageupload/:id', (req, res) => {
    console.log(req.files.file);
    var myfile = req.files.file;
    //var key=req.files.file.name;
    //console.log(key);

    var stream = fs.createReadStream(myfile.path);
    return s3fsImpl.writeFile(myfile.originalFilename, stream).then(() => {
        fs.unlink(myfile.path, (err) => {
            if (err) {
                console.error(err);
            }
            else {
                //console.log(req.files.upload);
                console.log('upload successfully');
            }
        });
    });
    const image = awsurl + req.files.file.name;
    console.log(image);
    userModel.findById(req.params.id, {
        $set: { Image: image }
    }).then((user) => {
        console.log('Data Updated', user);
        response.status(200).send(result);
    }, (error) => {
        console.log('Error saving product');
        response.status(400).send(error);
    }).catch((e) => {
        console.log('Exception caught');
        response.status(400).send(e);
    });
});


app.listen(3000, () => {
    console.log('server running at 3000');
})

