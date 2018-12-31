const expect = require('expect');
const request = require('supertest');
const { app } = require('../Express/express.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('GET /search router',()=>{
    it('should get the value of hscode fron the database',(done)=>{
        chai.request(app)
        .get('/search/textile/1')
        .end((error,response)=>{
            console.log('i am here at search route');
            response.should.have.status(200);
            done();
        })
    })
})