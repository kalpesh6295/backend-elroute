const express = require('express');
const router = express.Router();
const { postModel } = require('../Modals/postModel.js');
const { authenticate } = require('./../middleware/authenticate.js');
const _ = require('lodash');
const {imageupload} = require('./../middleware/imageupload.js');


//Router to add an new post into the database
router.post('/',authenticate,imageupload,(request,response)=>{
    var post =_.pick(request.body,['Content','Comment','Veiws','Save']);         //Picking the data for the new post
     var newPost=new postModel({
        // UserName:request.body.UserName,
        Image: request.imageurl,
        Video:post.Video,
        Content:post.Content,
        Comment:post.Comment,
        Veiws:post.Veiws,
        Save:post.Save,
        admin: request.user._id
    });

    newPost.save().then(() => {
        response.status(200).send(newPost);
    }).catch((e) => {
        response.status(400).send("Error whie uploading post");
    })
});

//Router to get the post value inputted into the database
router.get('/',authenticate,(request, response) => {
    postModel.find({ Creator: request.body.UserName }).then((newpost) => {
        response.status(200).send(newpost);
    }).catch((e) => {
        response.status(400).send(e);
    });
});

//Router to delete the data from the post by using an id parameter
router.delete('/delete/:id',authenticate,(request, response) => {
    var id = request.params.id;

    postModel.findByIdAndRemove(id).then((deletedPost) => {
        if (!deletedPost) {
            response.status(404).send('No such post exist, enter avaliable id');
        }
        response.status(200).send(deletedPost);
    }).catch((e) => {
        response.status(400).send("Error while deleting data",e);
    });
});

//Router to update an post into the database using id as parameter
router.patch('/update/:id', authenticate,imageupload, (request, response) => {
    var body = _.pick(request.body, ['Video', 'Content','Comment', 'Veiws', 'Save']);
    var id = request.params.id;
    postModel.findByIdAndUpdate(id, {
        $set: {
            Image:request.imageurl,
            Video:body.Video,
            Content:body.Content,
            Comment:body.Comment,
            Veiws:body.Veiws,
            Save:body.Save    
        }
    }).then((updatedPost) => {
        response.status(200).send(updatedPost);
    }).catch((e) => {
        response.status(400).send("Error while uploading data");
    })
});


module.exports = router;