const express = require('express');
const router = express.Router();
const {authenticate} = require('./../middleware/authenticate.js');
const {findUsersViaService} = require('./../Util/utility.js');

router.get('/:type(inspection|logistics|contentMarketing|bCommunication)',authenticate,(request,response)=>{
    findUsersViaService(request.url).then((users)=>{
        console.log(`${users[0].Username} \t ${users[0].Email}`);
        response.status(200).send(users);
    }).catch((e)=>{
        console.log(e);
        response.status(400).send('Cannot get User');
    });
});

module.exports = router;