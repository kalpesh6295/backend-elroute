const expect = require('expect');
const request = require('supertest');
const { app } = require('../Express/express.js');
const { userModel } = require('../Modals/postModel.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('POST /post/productroute', () => {
    it('should input the data', (done) => {
        chai.request(app)
            .post('/product/')
            .set('x-auth','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmJkZTg3NGZhZGY5ODJkODA3MWIyOTIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTM5MTcyNDY5fQ.n8VF3bJh66Z7LWG0mnEw42ljZwTQSkmsW_Ji81z_UG0')
            .field('Content-Type', 'multipart/form-data')
            .attach('Image','C:/Users/vivek/Pictures/Capture.PNG')
            .field('name','sdbvsdhv')
            .field('company','vivek raj')
            .end((err, res) => {
                console.log("i am here==:>");
                res.should.have.status(200);
                done();
            })
    })
});


describe('GET /product/productroute', () => {
    it('should output the post', (done) => {
        chai.request(app)
            .get('/product/')
            .set('x-auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmJkZTg3NGZhZGY5ODJkODA3MWIyOTIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTM5MTcyNDY5fQ.n8VF3bJh66Z7LWG0mnEw42ljZwTQSkmsW_Ji81z_UG0')
            .end((err, res) => {
                console.log("i am here==:>");
                res.should.have.status(200);
                console.log(res.body[0].should.have.property('company'));
                done();
            })
    })
});




describe('PATCH  /product/pupdateroute', () => {
    it('should delete the data', (done) => {
        var id = '5bbf0c2e884ac8155cfc310a';
        chai.request(app)
            .patch('/product/update/' + id)
            .set('x-auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmJkZTg3NGZhZGY5ODJkODA3MWIyOTIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTM5MTcyNDY5fQ.n8VF3bJh66Z7LWG0mnEw42ljZwTQSkmsW_Ji81z_UG0')
            .field('Content-Type', 'multipart/form-data')
            .attach('Image','C:/Users/vivek/Pictures/Capture.PNG')
            .field('company','abhijeet')
            .end((err, res) => {
                console.log("i am here==:>");
                res.should.have.status(200);
                done();
            })
    })
});

describe('DELETE /product/productdeleteroute', () => {
    it('should delete the data', (done) => {
        var id = '5bbf0c2e884ac8155cfc310a';
        chai.request(app)
            .delete('/product/delete/' + id)
            .set('x-auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmJkZTg3NGZhZGY5ODJkODA3MWIyOTIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTM5MTcyNDY5fQ.n8VF3bJh66Z7LWG0mnEw42ljZwTQSkmsW_Ji81z_UG0')
            .end((err, res) => {
                console.log("i am here==:>");
                res.should.have.status(200);
                done();
            })
    })
});