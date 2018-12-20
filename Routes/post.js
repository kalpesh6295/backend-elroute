const express = require('express');
const router = express.Router();
const { postModel } = require('../Modals/postModel.js');
const {userModel}=require('./../Modals/userModel.js');
const { authenticate } = require('./../middleware/authenticate.js');
const _ = require('lodash');
const {imageupload} = require('./../middleware/imageupload.js');
const {companyid}=require('./../middleware/companyid.js');
const {productModel}=require('./../Modals/productModel.js');

//Router to add an new post into the database
router.post('/',authenticate,companyid,imageupload,async (request,response)=>{
   try{
       const post = await _.pick(request.body, ['Content', 'Comment', 'Veiws', 'Save', 'admin','tagId']);         //Picking the data for the new post
       const newPost = await new postModel({
           // UserName:request.body.UserName,
           Image: request.imageurl,
           Video: post.Video,
           Content: post.Content,
           Comment: post.Comment,
           Veiws: post.Veiws,
           Save: post.Save,
           admin:request.user.Company_id,
           tagId:post.tagId
       });
       newPost.save().then((post) => {
           console.log(post._id);
           if(post.tagId){
               productModel.findByIdAndUpdate({_id:post.tagId},{$set:{postId:post._id}}).then((docs)=>{
               })
            }
            response.status(200).send(post);
       });
   } catch(e)
   {
       response.status(400).send("Error whie uploading post");
   }
});

//Router to get the post value inputted into the database
router.get('/',authenticate,companyid,async (request, response) => {
    try{
        const newpost = await postModel.find({ admin: request.user.Company_id })
        response.status(200).send(newpost);
    }catch (e){
        response.status(400).send(e);
    }
});

//Router to delete the data from the post by using an id parameter
router.delete('/delete/:id',authenticate,async (request, response) => {
    var id = request.params.id;
   try{
       const deletedPost = await postModel.findByIdAndRemove(id)
       if (!deletedPost) {
           response.status(404).send('No such post exist, enter avaliable id');
       }
       response.status(200).send(deletedPost);
   }catch(e){
       response.status(400).send("Error while deleting data", e);
   }   
});

//Router to update an post into the database using id as parameter
router.patch('/update/:id', authenticate,imageupload, async (request, response) => {
    try{
        const body = _.pick(request.body, ['Video', 'Content', 'Comment', 'Veiws', 'Save']);
        var id = request.params.id;
        const updatedPost = await postModel.findByIdAndUpdate(id, {
            $set: {
                Image: request.imageurl,
                Video: body.Video,
                Content: body.Content,
                Comment: body.Comment,
                Veiws: body.Veiws,
                Save: body.Save
            }
        })
            response.status(200).send(updatedPost);
    }catch(e){
        response.status(400).send("Error while uploading data");
    }
});


module.exports = router;