const expect = require('expect');
const request = require('supertest');
const { app } = require('../Express/express.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('GET  /feedroute',()=>{
    it('should return the feed of an company present in post',(done)=>{
        chai.request(app)
            .get('/feed/5c14dd40a649b80c40cd0004')
            .set('x-auth','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzE0ZGQ0MGE2NDliODBjNDBjZDAwMDQiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTQ0ODcxMjMyfQ.xUY87uAH75iksAHbBD7X3B6gfGYXrYGegrEsqM0ioYY')
            .end((error,response)=>{
                console.log("i am here at feed router");
                response.should.have.status(200);
                done();
            })
    })
})