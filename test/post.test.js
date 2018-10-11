const expect = require('expect');
const request = require('supertest');
const { app } = require('../Express/express.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('POST /post/postroute', () => {
    it('should input the post', (done) => {
        chai.request(app)
            .post('/post/')
            .set('x-auth','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmJkZTg3NGZhZGY5ODJkODA3MWIyOTIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTM5MTcyNDY5fQ.n8VF3bJh66Z7LWG0mnEw42ljZwTQSkmsW_Ji81z_UG0')
            .field('Content-Type', 'multipart/form-data')
            .attach('Image','C:/Users/vivek/Pictures/Capture.PNG')
            .field('Content','sdbvsdhv')
            .end((error, response) => {
                console.log("i am here==:>");
                response.should.have.status(200);
                done();
            })
    })
});


describe('GET /post/postroute', () => {
    it('should output the post', (done) => {
        chai.request(app)
            .get('/post/')
            .set('x-auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmJkZTg3NGZhZGY5ODJkODA3MWIyOTIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTM5MTcyNDY5fQ.n8VF3bJh66Z7LWG0mnEw42ljZwTQSkmsW_Ji81z_UG0')
            .end((error, response) => {
                console.log("i am here==:>");
                response.should.have.status(200);
                console.log(response.body[0].should.have.property('Content'));
                done();
            })
    })
});

describe('DELETE /post/postdeleteroute', () => {
    it('should delete the data', (done) => {
        var id ='5bbf5f31ab18162ca8de7289';
        chai.request(app)
            .delete('/post/delete/'+id)
            .set('x-auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmJkZTg3NGZhZGY5ODJkODA3MWIyOTIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTM5MTcyNDY5fQ.n8VF3bJh66Z7LWG0mnEw42ljZwTQSkmsW_Ji81z_UG0')
            .end((error, response) => {
                console.log("i am here==:>");
                response.should.have.status(200);
                done();
            })
    })
});


describe('Update  /post/postupdateroute', () => {
    it('should delete the data', (done) => {
        var id = '5bbef75a3aa2991f807237c9';
        chai.request(app)
            .patch('/post/update/' + id)
            .set('x-auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmJkZTg3NGZhZGY5ODJkODA3MWIyOTIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTM5MTcyNDY5fQ.n8VF3bJh66Z7LWG0mnEw42ljZwTQSkmsW_Ji81z_UG0')
            .field('Content-Type', 'multipart/form-data')
            .attach('Image','C:/Users/vivek/Pictures/Capture.PNG')
            .end((error, response) => {
                console.log("i am here==:>");
                response.should.have.status(200);
                done();
            })
    })
});
