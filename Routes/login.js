const {app} = require('./../Express/express.js');
const {mongoose} = require('./../mongoose/mongoose-connect.js');
const bodyParser = require('body-parser');
const {userModel} = require('../Modals/userModel.js');
const _ = require('lodash');

app.use(bodyParser.json());

app.post('/login',(request,response)=>{
    var user = _.pick(request.body,['Email','Password']);

    userModel.findOne(user).then((result)=>{
        if(!result){
            response.status(404).send('Sorry! You Are Not Registered!');
            return console.log('No User Found with Such Details');
        }
        console.log('User is',result);
        response.status(200).send(result);
    },(error)=>{
        console.log('Error Fetching User');
        console.log(error)
    }).catch((e)=>{
        console.log('Caught Other Error');
        console.log(e);
    });

});

app.listen(3000,(status)=>{
    console.log('Server Up on port 3000');
});