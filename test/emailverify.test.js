const expect = require('expect');
const request = require('supertest');
const { app } = require('../Express/express.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

//GET teasting route for the email verfiy with additional information as token and email
describe('GET /emailverfiy/:token/:email',()=>{
    it('should verify email address',(done)=>{
        var token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmI4NmJjYThmNWM1NzE4Njg5OTNjMmEiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTM4ODEyODc0fQ.QJNO3Yf3KyLV7cgTLG3ftevQZfoG8Sfsxvh9Xz6_5fY';
        var email='vivekraj7776@gmail.com'
        chai.request(app)
        .get('/verify/'+token+'/'+email)
        .end((error,response)=>{
            response.should.have.status(200);
            done();
        })
    })
})