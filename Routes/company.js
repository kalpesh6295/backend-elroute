const express = require('express');
const router = express.Router();
const {authenticate} = require('./../middleware/authenticate.js');
const {companyModel} = require('./../Modals/companyModel.js');
const {userModel} = require('./../Modals/userModel.js');
const _ = require('lodash');


//Router to add a new company into the database
router.post('/',authenticate,(request,response)=>{
    var body = _.pick(request.body,['category','companyName','location','website','comapanyType','shortIntro','yearEst','address','certification','employeeSize','about','workingHours','keywords']); //picking the values for the company by user in satgeOne
    var newCompany = new companyModel({
            category:body.category,
            companyName:body.companyName,
            location:body.location,
            website:body.website,
            comapanyType:body.comapanyType,
            shortIntro:body.shortIntro,
            yearEst:body.yearEst,
            address:body.address,
            certification:body.certification,
            employeeSize:body.employeeSize,
            about:body.about,
            workingHours:body.workingHours,
            keywords:body.keywords,
            admin: request.user._id,
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
        response.status(400).send("Please enter a valid Details");
    });
});

//Router to show user the company value saved into the database
router.get('/',authenticate,(request,response)=>{
    companyModel.find({"admin":request.user._id}).then((companies)=>{
        if(!companies){
            return response.status(200).send("Company not present in the database");
        }
    response.status(200).send({companies});
    }).catch((e)=>{
        response.status(400).send("Entered company is not present");
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
        response.status(400).send('Error while deleting');
    }).catch((e)=>{
        response.status(400).send("Error while deleting");
    });
});

//Router to update company values which is present into the database of company
router.patch('/update/:id',authenticate,(request,response)=>{
    var body = _.pick(request.body,['category','companyName','location','website','companyType','shortIntro','yearEst','address','certification','employeSize','about','workingHours','keywords']); //Getting parameter 
    var id = request.params.id;
    companyModel.findByIdAndUpdate(id,{
        $set:{
            category:body.category,
            companyName:body.companyName,
            location:body.location,
            website:body.website,
            companyType:body.companyType,
            shortIntro: body.shortIntro,
            yearEst: body.yearEst,
            address: body.address,
            certification: body.certification,
            employeeSize: body.employeeSize,
            about: body.about,
            workingHours: body.workingHours,
            keywords: body.keywords                                  //updating value into the database into the company
        }
    }).then((updatedCompany)=>{
        response.status(200).send(updatedCompany);
    }).catch((e)=>{
        response.status(400).send("Error while updating");
    })
});

//Router to follow a company and update into user database in following company section
router.patch('/follow',authenticate,(request,response)=>{
    var userId = request.user._id;
    companyModel.findOne({"companyName":request.body.companyName}).then((company)=>{
        if(!company){                                                                  
            return response.status(400).send("No such company present");
        }
        return userModel.findByIdAndUpdate(userId,{
            $push:{
                "Following.company":company._id                     //if user follows a company user following is added with the company 
            }
        });
    }).then((updatedUser)=>{
        response.status(200).send(updatedUser.Following)
    }).catch((e)=>{
        response.status(400).send('Exception caught');
    });
});


module.exports = router;