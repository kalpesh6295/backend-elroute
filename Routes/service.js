const express=require('express');
const router=express.Router();
const _=require('lodash');
const {serviceModel}=require('./../Modals/serviceModel.js');
const {authenticate}=require('./../middleware/authenticate.js');
const {imageupload}=require('./../middleware/imageupload.js');

router.post('/',authenticate,imageupload,async(request,response)=>{
     try{
        const body=_.pick(request.body,['name','companyName','industry','description','tags','veiws','price','bookmarks'])
        var service =new serviceModel({
            Image:request.imageurl,
            name:body.name,
            companyName:body.companyName,
            industry:body.industry,
            description:body.description,
            tags:body.tags,
            veiws:body.veiws,
            price:body.price,
            bookmarks:body.bookmarks,
            Creator:request.user._id
        })
        var result=await service.save();
        response.status(200).send(result);
    }catch(e){
        response.status(400).send(e);
     }
});

router.get('/',authenticate,async(request,response)=>{
    try{
        var result = await serviceModel.find({ Creator: request.user._id });
        response.status(200).send(result);
    }catch(e){
        response.status(400).send(e);
    }
})

router.patch('/:id',authenticate,imageupload,async(request,response)=>{
    try{
        const body = _.pick(request.body,['name', 'companyName', 'industry', 'description', 'tags', 'veiws', 'price', 'bookmarks'])
        var id=request.params.id;
        var updatedService=await serviceModel.findByIdAndUpdate({_id:id},{
            $set:{
                Image: request.imageurl,
                name: body.name,
                companyName: body.companyName,
                industry: body.industry,
                description: body.description,
                tags: body.tags,
                veiws: body.veiws,
                price: body.price,
                bookmarks: body.bookmarks
            }
        });
        response.status(200).send(updatedService);
    }catch(e){
        response.status(400).send(e);
    }
})


router.delete('/:id',authenticate,async(request,response)=>{
    try{
        var id = request.params.id;
        var service=await serviceModel.findByIdAndRemove({_id:id});
        if(!service)
        {
            response.status(404).send("not a valid service");
        }
        response.status(200).send(`Deleted company is ${service}`);
    }catch(e){
        response.status(400).send(e);
    }
})

module.exports = router;