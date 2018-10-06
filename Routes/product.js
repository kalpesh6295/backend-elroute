const express = require('express');
const router = express.Router();
const _ = require('lodash');
const {productModel} = require('./../Modals/productModel.js');
const {authenticate} = require('./../middleware/authenticate.js');
const { imageupload } = require('./../middleware/imageupload.js');


//Router used to add new product into the database
router.post('/',authenticate,imageupload,(request,response)=>{
    var body = _.pick(request.body,['name','company','industry','description']);        //pick up the data for the new product
    var product = new productModel({
            Image: request.imageurl,    
            name:body.name,
            company:body.company,
            industry:body.industry,
            description:body.description,
            Creator:request.user._id,
        });
    product.save().then((result)=>{
        response.status(200).send(result);
    }).catch((e)=>{
        response.status(400).send("errror is ----->",e);
    });
});

//Router to get the product which is added into the database
router.get('/',authenticate,(request,response)=>{
    productModel.find({Creator:request.user._id}).then((products)=>{
        response.status(200).send(products);
    }).catch((e)=>{
        response.status(400).send(e);
    });
});

//Router used to update the product data which is already added using id as an parameter
router.patch('/update/:id', authenticate, (request, response) => {
    var body = _.pick(request.body, ['name', 'company', 'image', 'industry', 'description']);
    var id = request.params.id;
    productModel.findByIdAndUpdate(id, {
        $set: {
            name: body.name,
            company:body.company,
            image:body.image,
            industry:body.industry,
            description:body.description
        }
    },{returnOriginal:false}).then((updatedProducts) => {
        response.status(200).send(updatedProducts);
    }).catch((e) => {
        response.status(400).send(e);
    })
});

//Router added to delete an product from the database using id as an parameter
router.delete('/delete/:id', authenticate, (request, response) => {
    var id = request.params.id;
    productModel.findByIdAndRemove(id).then((productCompany) => {
        if (!productCompany) {
            response.status(404).send('No such company exist, enter avaliable id');
        }
        response.status(200).send(`Deleted Company is -> ${productCompany}`);
    }).catch((e) => {
        response.status(400).send(e);
    });
});

module.exports = router;

