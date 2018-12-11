const express = require('express');
const router = express.Router();
const {authenticate} = require('./../middleware/authenticate.js');
const {companyModel} = require('./../Modals/companyModel.js');
const {userModel} = require('./../Modals/userModel.js');
const _ = require('lodash');


//Router to add a new company into the database
router.post('/',authenticate,async (request,response)=>{
    try{
        const body = await _.pick(request.body, ['category', 'companyName', 'location', 'website', 'companyType', 'shortIntro', 'yearEst', 'address', 'certification', 'employeeSize', 'about', 'workingHours', 'keywords','hsCode']); //picking the values for the company by user in satgeOne
        var newCompany = await new companyModel({
            category: body.category,
            companyName: body.companyName,
            location: body.location,
            website: body.website,
            companyType: body.companyType,
            shortIntro: body.shortIntro,
            yearEst: body.yearEst,
            address: body.address,
            certification: body.certification,
            employeeSize: body.employeeSize,
            about: body.about,
            workingHours: body.workingHours,
            keywords: body.keywords,
            admin: request.user._id,
            hsCode:body.hsCode
        });
        var result = await newCompany.save();
        var user = await userModel.findOneAndUpdate(
            { _id: request.user._id },                          //if User is present in the database add that company 
                {
                    $push: { Company_id: result._id }               //push company data to the user company coloumn 
                }
        )
        response.status(200).send(result);
        var profileScore = await newCompany.calculateScore(newCompany);
        await companyModel.findByIdAndUpdate(result._id,{
                            $set:{
                                matchScore:profileScore
                            }
        });
        if(body.hsCode!=null){
            var users = [];
            for(var i=0; i<body.hsCode.length; i++)
            {
                var foundUser = await userModel.find({HsCode:body.hsCode[i]});

                foundUser.forEach(function(items){
                    console.log('Found Users Are',items.UserName);
                    users.push(foundUser);
                })
            }
        }
    }catch(e){
        console.log(e);
        response.status(400).send("Please enter valid Details");
    }
});

//Router to show user the company value saved into the database
router.get('/',authenticate, async (request,response)=>{
   try{
        const companies = await companyModel.find({ "admin": request.user._id });
        if (!companies) {
            return response.status(400).send("Company not present in the database");
        }
        response.status(200).send({ companies });
   }catch(e){
       response.status(400).send("Entered company is not present");
   }
});

//Router to delete an user company from the database 
router.delete('/delete/:id',authenticate,async (request,response)=>{
    try{
        var id = request.params.id;

        const deletedCompany = await companyModel.findByIdAndRemove(id)
            if (!deletedCompany) {                                                            //Checking if the comppany is present in the database
                response.status(404).send('No such company exist, enter avaliable id');
            }
            response.status(200).send(`Deleted Company is -> ${deletedCompany}`);
    }catch(e){
        response.status(400).send("Error while deleting");
    }
});

//Router to update company values which is present into the database of company
router.patch('/update/:id',authenticate,async (request,response)=>{
  try{
        var body = await _.pick(request.body, ['category', 'companyName', 'location', 'website', 'companyType', 'shortIntro', 'yearEst', 'address', 'certification', 'employeSize', 'about', 'workingHours', 'keywords']); //Getting parameter 
        var id = request.params.id;
        // console.log('Reuqest Body is ----->',request.body);
        // console.log('picked body is',body);
        var updatedCompany = await companyModel.findByIdAndUpdate(id, {
            $set: {
                category: body.category,
                companyName: body.companyName,
                location: body.location,
                website: body.website,
                companyType: body.companyType,
                shortIntro: body.shortIntro,
                yearEst: body.yearEst,
                address: body.address,
                certification: body.certification,
                employeeSize: body.employeeSize,
                about: body.about,
                workingHours: body.workingHours,
                keywords: body.keywords                                //updating value into the database into the company
            }
            // new:true
        })
        // console.log(updatedCompany);
        response.status(200).send(updatedCompany);
        var profileScore = await updatedCompany.calculateScore(request.body);
        console.log('profile score is',profileScore);
        await companyModel.findByIdAndUpdate(id,{
            $set:{
                matchScore:profileScore
            }
        });
    }catch(e){
      response.status(400).send("Error while updating");
  }
});

//Router to follow a company and update into user database in following company section
router.patch('/follow',authenticate,async (request,response)=>{
  try{
      var userId = request.user._id;
      var company = await companyModel.findOne({ "companyName": request.body.companyName });
      if (!company) {
          return response.status(400).send("No such company present");
      }
      return userModel.findByIdAndUpdate(userId, {
          $push: {
              "Following.company": company._id                     //if user follows a company user following is added with the company 
          }
      }).then((updatedUser) => {
          response.status(200).send(updatedUser.Following)
        });
  }catch(e){
      response.status(400).send('Exception caught');
  }
});


module.exports = router;