const express = require('express');
const router = express.Router();
const _ = require('lodash');
const bodyParser = require('body-parser');
const {productModel} = require('./../Modals/productModel.js');
const {userModel} = require('./../Modals/userModel');
// const {app} = require('./../Express/express.js');
const {mongoose} = require('./../mongoose/mongoose-connect.js');
const {authenticate} = require('./../middleware/authenticate.js');

// app.use(bodyParser.json());

//adding product into DB
router.post('/publish',authenticate,(request,response)=>{
    console.log('id of user logged in is',request.user._id);
    console.log(request.body.company);
    var body = _.pick(request.body,['name','company','image','industry','description']);
    console.log(body)
    var product = new productModel({
            name:body.name,
            company:body.company,
            image:body.image,
            industry:body.industry,
            description:body.description,
            Creator:request.user._id,
        });
    product.save().then((result)=>{
        console.log('_id is :::----> '+request.user._id);
        console.log(result);
        return userModel.findOneAndUpdate(
            {_id:request.user._id}, //find this <---
            {
                $push:{Post_id:result._id}
            }).then((user)=>{
                console.log('Data Updated',user);
                response.status(200).send(result);
        });
    },(error)=>{
        console.log('Error Saving product',error);
        response.status(400).send(error);
    }).catch((e)=>{
        console.log('Exception caught');
        response.status(400).send(e);
    });
});

router.get('/',authenticate,(request,response)=>{
    console.log('inside router.get');
    productModel.find({adder:request.user._id}).then((products)=>{
        console.log(request.user._id);
        console.log('-----------PPPPPPRRRRRRRRRROOOOOOOODDDDDDDDDUUUUUUUTTTTTTSSSSS---------------------------------------');
        console.log(products);
        response.status(200).send(products);
    },(error)=>{
        console.log('Cannot get all products',error);
    }).catch((e)=>{
        console.log('Exception caught',e);
    });
});

module.exports = router;

// app.listen(3000,(status)=>{
//     console.log('Server up on the port 3000');
// })