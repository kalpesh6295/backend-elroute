const express = require('express');
const router = express.Router();
// const { app } = require('./../Express/express.js');
const { mongoose } = require('./../mongoose/mongoose-connect.js');
const bodyParser = require('body-parser');
const { postModel } = require('../Modals/postModel.js');
const { authenticate } = require('./../middleware/authenticate.js');
const _ = require('lodash');
const app = express();
app.use(bodyParser.json());

app.post('/posts',authenticate,(request,response)=>{
    console.log('start post');
    console.log(request,undefined,3);
    var post =_.pick(request.body,['Image','Video','Content','Comment','Veiws','Save']);
     var newPost=new postModel({
        // UserName:request.body.UserName,
        Image:post.Image,
        Video:post.Video,
        Content:post.Content,
        Comment:post.Comment,
        Veiws:post.Veiws,
        Save:post.Save
    });

    console.log('mid post');
    console.log(post);
    newPost.save().then(() => {
        return newPost;
    }).catch((e) => {
        console.log('Error Registering User', e);
        response.status(400).send();
    })
    console.log('end post');
});

app.get('/posts',authenticate,(request, response) => {
    postModel.find({ Creator: request.body.UserName }).then((newpost) => {
        console.log(request.body.UserName);
        console.log('post');
        console.log(newpost);
        response.status(200).send(newpost);
    }, (error) => {
        console.log('cannot get post', error);
    }).catch((e) => {
        console.log('Exception caught', e);
    });
});

app.delete('/posts/delete/:id',authenticate,(request, response) => {
    var id = request.params.id;

    // if (!ObjectId.isValid(id)) {
    //     return res.status(400).send();
    // }

    postModel.findByIdAndRemove(id).then((newpost) => {
        if (newpost) {
            return response.status(200).send();
        }
        response.send(newpost);
    }).catch((e) => {
        response.status(400).send();
    });
});

app.patch('/posts/update',authenticate,(request,response)=>{
    if(!ObjectID.isvalid(id)){
        return res.status(400).send();
    }

     postModel.findByIdAndUpdate(request.user._id, //find this <---
            {
                $push: { Post_id: result._id }
            }).then((user) => {
                console.log('Data Updated', user);
                response.status(200).send(result);
            },(error)=>{
                console.log('Error saving product');
                response.status(400).send(error);
            }).catch((e)=>{
                console.log('Exception caught');
                response.status(400).send(e);
            });
});

module.exports = router;