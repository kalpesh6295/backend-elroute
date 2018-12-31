const expect = require('expect');
const request = require('supertest');
const { app } = require('../Express/express.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('POST /unsubscribe router',()=>{
    it('should unsubscribe this hscode',(done)=>{
        chai.request(app)
        .post('/unsubscribe/5256')
            .set('x-auth','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzE0ZGQ0MGE2NDliODBjNDBjZDAwMDQiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTQ0ODcxMjMyfQ.xUY87uAH75iksAHbBD7X3B6gfGYXrYGegrEsqM0ioYY')
        .end((error,response)=>{
            console.log("i am here at unsubscribe router===>");
            response.should.have.status(200);
        })
    })
})