const expect = require('expect');
const request = require('supertest');
const { app } = require('../Express/express.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);
//POST route to check wheter company added route is working or not
describe('POST /company/companypostroute', () => {
    it('should input the company', (done) => {
        chai.request(app)
            .post('/company/')
            .set('x-auth','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmJkZTg3NGZhZGY5ODJkODA3MWIyOTIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTM5MTcyNDY5fQ.n8VF3bJh66Z7LWG0mnEw42ljZwTQSkmsW_Ji81z_UG0')
            .send({
                    category:"dimkana",
                    companyName:"riki ka papa",
                    location:"rinki ka ghar"
            })
            .end((error, response) => {
                console.log("i am here==:>");
                response.should.have.status(200);
                done();
            })
    })
});

//GET testing  route of company
describe('GET /company/companyroute', () => {
    it('should output the company', (done) => {
        chai.request(app)
            .get('/company/')
            .set('x-auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmJkZTg3NGZhZGY5ODJkODA3MWIyOTIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTM5MTcyNDY5fQ.n8VF3bJh66Z7LWG0mnEw42ljZwTQSkmsW_Ji81z_UG0')
            .end((error, response) => {
                console.log("i am here==:>");
                response.should.have.status(200);
                done();
            })
    })
});

//Update testing route for the company
describe('Update  /post/postupdateroute', () => {
    it('should update the data', (done) => {
        var id = '5bb86db98f5c571868993c2d';
        chai.request(app)
            .patch('/company/update/' + id)
            .set('x-auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmJkZTg3NGZhZGY5ODJkODA3MWIyOTIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTM5MTcyNDY5fQ.n8VF3bJh66Z7LWG0mnEw42ljZwTQSkmsW_Ji81z_UG0')
            .send({
                companyName:"vivek raj 776"
            })
            .end((error, response) => {
                console.log("i am here==:>");
                response.should.have.status(200);
                done();
            })
     })
});

//Delete testing route for the company
describe('DELETE /company/companydeleteroute', () => {
    it('should delete the data', (done) => {
        var id ='5bbf5f2dab18162ca8de7288';
        chai.request(app)
            .delete('/company/delete/'+id)
            .set('x-auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmJkZTg3NGZhZGY5ODJkODA3MWIyOTIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTM5MTcyNDY5fQ.n8VF3bJh66Z7LWG0mnEw42ljZwTQSkmsW_Ji81z_UG0')
            .end((error, response) => {
                console.log("i am here==:>");
                response.should.have.status(200);
                done();
            })
    })
});