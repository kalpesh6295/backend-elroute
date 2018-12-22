const express = require('express');
const router = express.Router();
const _ = require('lodash');
const {productModel} = require('./../Modals/productModel.js');
const {authenticate} = require('./../middleware/authenticate.js');
const { imageupload } = require('./../middleware/imageupload.js');


//Router used to add new product into the database
router.post('/',authenticate,imageupload,async (request,response)=>{
    try{
        const body = await _.pick(request.body, ['name', 'company', 'industry', 'description','views']);        //pick up the data for the new product
        var product =await new productModel({
            Image: request.imageurl,
            name: body.name,
            company: body.company,
            industry: body.industry,
            description: body.description,
            Creator: request.user._id,
            views: body.views
        });
        var result=await product.save();
            response.status(200).send(result);

    }catch(e){
        response.status(400).send("Error Adding product");
    }
});

//Router to get the product which is added into the database
router.get('/',authenticate,async (request,response)=>{
    try{
        const products = await productModel.find({ Creator: request.user._id });
            response.status(200).send(products);
    }catch(e){
        response.status(400).send('Error getting products of user');
    }
});

//Router used to update the product data which is already added using id as an parameter
router.patch('/update/:id', authenticate, async (request, response) => {
    try{
        const body = _.pick(request.body, ['name', 'company', 'image', 'industry', 'description']);
        var id = request.params.id;
        const updatedProducts=await productModel.findByIdAndUpdate(id, {
            $set: {
                name: body.name,
                company: body.company,
                image: body.image,
                industry: body.industry,
                description: body.description
            }
        }, { returnOriginal: false });
            response.status(200).send(updatedProducts);

    }catch(e){
        response.status(400).send('Error Updating this order');
    }
});

//Router added to delete an product from the database using id as an parameter
router.delete('/delete/:id', authenticate, async(request, response) => {
    try{
        var id = request.params.id;
        const productCompany = await productModel.findByIdAndRemove(id);
        if (!productCompany) {
            response.status(404).send('No such company exist, enter avaliable id');
        }
        response.status(200).send(`Deleted Company is -> ${productCompany}`);
    }catch(e){
        response.status(400).send('Error deleting product');
    }
});



module.exports = router;

