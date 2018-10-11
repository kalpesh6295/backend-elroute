const expect = require('expect');
const request = require('supertest');
const { app } = require('../Express/express.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);


describe('/PATCH bookmark/post?product?company',()=>{
    it('should bookmark the data',(done)=>{
        var id ='5bbef75a3aa2991f807237c9';
        chai.request(app)
        .patch('/bookmark/'+'post/'+id)
        .set('x-auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmJkZTg3NGZhZGY5ODJkODA3MWIyOTIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTM5MTcyNDY5fQ.n8VF3bJh66Z7LWG0mnEw42ljZwTQSkmsW_Ji81z_UG0')
        .end((error,response)=>{
            response.should.have.status(200);
            done();
        })
    })
})