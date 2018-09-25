const {app} = require('./../Express/express.js');
const {mongoose} = require('./../mongoose/mongoose-connect.js');
const bodyParser = require('body-parser');
const {userModel} = require('../Modals/userModel.js');
const _ = require('lodash');

app.use(bodyParser.json());

app.post('/signup',(request,response)=>{
    var user = _.pick(request.body,['UserName','Password','Email','Mobile','Address']);
    var newUser = new userModel(user);
    console.log(user);
    newUser.save().then(()=>{

    return newUser.generateAuthToken();

    }).then((token_recieved)=>{
        response.header('x-auth',token_recieved).send(newUser);
        
        // response.status(200).send(result); 
        console.log('token is',token_recieved);
    }).catch((e)=>{
        console.log('Error Registering User',e);
        response.status(400).send();
    })
});

app.listen(3000,(status)=>{
    console.log('Server Up on port 3000');
});