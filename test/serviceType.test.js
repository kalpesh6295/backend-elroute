const expect = require('expect');
const request = require('supertest');
const { app } = require('../Express/express.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('GET /serviceType router', () => {
    it('should get the value of hscode fron the database', (done) => {
        chai.request(app)
            .get('/serviceType/logistics')
            .end((error, response) => {
                console.log('i am here at serviceType route');
                response.should.have.status(200);
                done();
            })
    })
})