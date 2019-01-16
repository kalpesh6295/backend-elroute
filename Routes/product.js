const express = require('express');
const router = express.Router();
const _ = require('lodash');
const {productModel} = require('./../Modals/productModel.js');
const {authenticate} = require('./../middleware/authenticate.js');
const { imageupload } = require('./../middleware/imageupload.js');


//Router used to add new product into the database
router.post('/',authenticate,imageupload,async (request,response)=>{
    try{
        const body = _.pick(request.body, ['productName', 'productImage', 'shortDescription', 'productInfo', 'specificationInfo','productInfo','price','minPrice','maxPrice','moq','industry','category','tfCode']);        //pick up the data for the new product
        var product =await new productModel({
                productName: body.productName,
                productImage: body.productImage,
                shortDescription: body.shortDescription,
                productInfo: body.productInfo,
                price: body.price,
                minPrice:body.minPrice,
                maxPrice:body.maxPrice,
                moq:body.moq,
                industry:body.industry,
                category:body.category,
                tfCode:body.tfCode,
                creator:request.user.Company_id
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
        const products = await productModel.find({ creator: request.user._id });
            response.status(200).send(products);
    }catch(e){
        response.status(400).send('Error getting products of user');
    }
});

//Router used to update the product data which is already added using id as an parameter
router.patch('/update/:id', authenticate, async (request, response) => {
    try{
        const body = _.pick(request.body, ['productName', 'productImage', 'shortDescription', 'productInfo', 'specificationInfo','productInfo','price','minPrice','maxPrice','moq','industry','category','tfCode']);
        var id = request.params.id;
        const updatedProducts=await productModel.findByIdAndUpdate(id, {
            $set: {
                productName: body.productName,
                productImage: body.productImage,
                shortDescription: body.shortDescription,
                productInfo: body.productInfo,
                price: body.price,
                minPrice:body.minPrice,
                maxPrice:body.maxPrice,
                moq:body.moq,
                industry:body.industry,
                category:body.category,
                tfCode:body.tfCode
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

