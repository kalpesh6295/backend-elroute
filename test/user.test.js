const expect =require('expect');
const request= require('supertest');
const {app}=require('../Express/express.js');
const chai = require('chai');
const  chaiHttp= require('chai-http');
const should=chai.should();

chai.use(chaiHttp);

describe('GET /user/',()=>{
    it('should get the user',(done)=>{
        var user ='5bbdd584087b742738deebec';
        chai.request(app)
        .get('/user/'+user)
        .end((error,response)=>{
            response.should.have.status(200);
            console.log(response.body.should.have.property('UserName'));
            done();
        })
    })
});

describe('UPDATE /user',()=>{
    it("should update the value",(done)=>{
        var user = '5bbdd584087b742738deebec';
        var text={ 
             UserName: "sjhbvsjv ",
             Email:"adnhfuiefbdcikvds",
             Password:'afuhnskv'
         }
        chai.request(app)
        .patch('/user/update/'+user)
        .send(text)
        .end((error,response)=>{
            response.should.have.status(200);
            done();
        })
    })
});