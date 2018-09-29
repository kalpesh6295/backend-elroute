const { app } = require('./../Express/express.js');
const { mongoose } = require('./../mongoose/mongoose-connect.js');
const bodyParser = require('body-parser');
const { postModel } = require('../Modals/postModel.js');
const { authenticate } = require('./../middleware/authenticate.js');
const _ = require('lodash');

app.use(bodyParser.json());

app.post('/post',authenticate,(request,response)=>{
    
    var post =_.pick(request.body,['Image','Video','Content','Comment','Veiws','Save']);
    const newPost=new postModel({
        UserName:request.body.UserName,
        Image:post.Image,
        Video:post.Video,
        Content:post.Content,
        Comment:post.Comment,
        Veiws:post.Veiws,
        Save:post.Save
    });

    console.log(post);
    newPost.save().then(() => {
        return newPost;
    }).catch((e) => {
        console.log('Error Registering User', e);
        response.status(400).send();
    })

});

app.get('/post',authenticate,(request, response) => {
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

app.delete('/post/delete',authenticate,(request, response) => {
    var id = request.body.id;

    if (!ObjectID.isValid(id)) {
        return res.status(400).send();
    }

    newpost.findByIdAndRemove(id).then((newpost) => {
        if (newpost) {
            return res.status(400).send();
        }
        res.send(newpost);
    }).catch((e) => {
        res.status(400).send();
    });
});

app.patch('/post/update',authenticate,(request,response)=>{
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

app.listen(3000,(status)=>{
    console.log("server running on 3000");
});