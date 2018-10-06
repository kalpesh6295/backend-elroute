const express = require('express');
const router = express.Router();
const {authenticate} = require('./../middleware/authenticate.js');
const {companyModel} = require('./../Modals/companyModel.js');
const {userModel} = require('./../Modals/userModel.js');
const _ = require('lodash');


//Router to add a new company into the database
router.post('/',authenticate,(request,response)=>{
    var body = _.pick(request.body,['category','companyName','location','website','comapanyType']); //picking the values for the company by user in satgeOne
    var newCompany = new companyModel({
        stageOne:{
            category:body.category,
            companyName:body.companyName,
            location:body.location,
            website:body.website,
            comapanyType:body.comapanyType,
            admin:request.user._id
        }
    });
    newCompany.save().then((result)=>{
        return userModel.findOneAndUpdate(
            {_id:request.user._id},                         //if User is present in the database add that company 
            {
                $push:{Company_id:result._id}               //push company data to the user company coloumn 
            }).then((user)=>{
                response.status(200).send(result);
        });
    }).catch((e)=>{
        response.status(400).send(e);
    });
});

//Router to show user the company value saved into the database
router.get('/',authenticate,(request,response)=>{
    companyModel.find({"stageOne.admin":request.user._id}).then((companies)=>{
        if(!companies){
            return response.status(200).send();
        }
    response.status(200).send({companies});
    }).catch((e)=>{
        response.status(400).send(e);
    });
});

//Router to delete an user company from the database 
router.delete('/delete/:id',authenticate,(request,response)=>{
    var id = request.params.id;

    companyModel.findByIdAndRemove(id).then((deletedCompany)=>{
        if(!deletedCompany){                                                            //Checking if the comppany is present in the database
            response.status(404).send('No such company exist, enter avaliable id');
        }
        response.status(200).send(`Deleted Company is -> ${deletedCompany}`);
    },(error)=>{
        response.status(400).send('Erroe while deleting');
    }).catch((e)=>{
        response.status(400).send(e);
    });
});

//Router to update company values which is present into the database of StageOne
router.patch('/update/:id',authenticate,(request,response)=>{
    var body = _.pick(request.body,['category','companyName','location','website','companyType']); //Getting parameter 
    var id = request.params.id;
    companyModel.findByIdAndUpdate(id,{
        $set:{
            stageOne:body                                   //updating value into the database into te stageOne of the company
        }
    }).then((updatedCompany)=>{
        response.status(200).send(updatedCompany);
    }).catch((e)=>{
        response.status(400).send(e);
    })
});

//Router to follow a company and update into user database in following company section
router.patch('/follow',authenticate,(request,response)=>{
    var userId = request.user._id;
    companyModel.findOne({"stageOne.admin":request.user._id}).then((company)=>{
        if(!company){                                                                  
            return response.status(400).send();
        }
        return userModel.findByIdAndUpdate(userId,{
            $push:{
                "Following.company":company._id                     //if user follows a company user following is added with the company 
            }
        });
    }).then((updatedUser)=>{
        response.status(200).send(updatedUser.Following)
    }).catch((e)=>{
        response.status(400).send('Exception caught',e);
    });
});


module.exports = router;