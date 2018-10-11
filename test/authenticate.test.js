const expect = require('expect');
const request = require('supertest');
const { app } = require('../Express/express.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

//Post testing route for testing the signup post route
describe('POST /auth/signup', () => {
    it('should get the user', (done) => {
        var text={                                                            //required detail for user
            UserName:"abhijeet",                                                
            Email:"vivekraj776@outlook.com",
            Password:"abhi123"
        }
        chai.request(app)                                                     //calling localhost for server
            .post('/auth/signup')
            .send(text)
            .end((error, response) => {
                response.should.have.status(200);
                console.log(response.body.should.have.property('UserName'));  //checking for the user is inputing the correct value  
                done();
            })
    })
});

//Post route to check that user login is correct or not
describe('POST /auth/login',()=>{
    it('it should return user present',(done)=>{
        var text={                                                          //input username and password for login
            Email:"vivekraj776@outlook.com",
            Password:"abhi123"
        }
        chai.request(app)
        .post('/auth/login')
        .send(text)
        .end((error,response)=>{
            console.log('I am here ===>');
            response.should.have.status(200);
            done();
        })
    })
});

//DELETE route for the user to check that data is removed from the database 
describe('DELETE /auth/logout', () => {
    it('it should return user present', (done) => {
       var user ="abhijeet";
        var token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmJkZTk1NmJkNjZjMjEzNzg0NzZmNTQiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTM5MTcyNjk1fQ.RcyrXd24po58Bmyu5DS9eP9-3nT-avFLb9UVCnVfmRY";
        chai.request(app)
            .delete('/auth/logout')
            .set('x-auth',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmJkZTk1NmJkNjZjMjEzNzg0NzZmNTQiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTM5MTcyNjk1fQ.RcyrXd24po58Bmyu5DS9eP9-3nT-avFLb9UVCnVfmRY")
            .auth("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmJkZTk1NmJkNjZjMjEzNzg0NzZmNTQiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTM5MTcyNjk1fQ.RcyrXd24po58Bmyu5DS9eP9-3nT-avFLb9UVCnVfmRY")
            .send(user,token)
            .end((error, response) => {
                console.log('I am here in logout ===>');
                response.should.have.status(200);
                done();
            })
    })
});