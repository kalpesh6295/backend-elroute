const expect = require('expect');
const request = require('supertest');
const { app } = require('../Express/express.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

//POST route to check whether the product route is working
describe('POST /post/productroute', () => {
    it('should input the data', (done) => {
        chai.request(app)
            .post('/product/')
            .set('x-auth','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmJkZTg3NGZhZGY5ODJkODA3MWIyOTIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTM5MTcyNDY5fQ.n8VF3bJh66Z7LWG0mnEw42ljZwTQSkmsW_Ji81z_UG0')
            .field('Content-Type', 'multipart/form-data')
            .attach('Image','C:/Users/vivek/Pictures/Capture.PNG')
            .field('name','sdbvsdhv')
            .field('company','vivek raj')
            .end((error, response) => {
                console.log("i am here==:>");
                response.should.have.status(200);
                done();
            })
    })
});

//GET route to check whether the product get route is working
describe('GET /product/productroute', () => {
    it('should output the post', (done) => {
        chai.request(app)
            .get('/product/')
            .set('x-auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmJkZTg3NGZhZGY5ODJkODA3MWIyOTIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTM5MTcyNDY5fQ.n8VF3bJh66Z7LWG0mnEw42ljZwTQSkmsW_Ji81z_UG0')
            .end((err, response) => {
                console.log("i am here==:>");
                response.should.have.status(200);
                console.log(response.body[0].should.have.property('company'));
                done();
            })
    })
});

//UPDATE route to check whether the product update route is working
describe('PATCH  /product/pupdateroute', () => {
    it('should delete the data', (done) => {
        var id = '5bbf0c2e884ac8155cfc310a';
        chai.request(app)
            .patch('/product/update/' + id)
            .set('x-auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmJkZTg3NGZhZGY5ODJkODA3MWIyOTIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTM5MTcyNDY5fQ.n8VF3bJh66Z7LWG0mnEw42ljZwTQSkmsW_Ji81z_UG0')
            .field('Content-Type', 'multipart/form-data')
            .attach('Image','C:/Users/vivek/Pictures/Capture.PNG')
            .field('company','abhijeet')
            .end((error, response) => {
                console.log("i am here==:>");
                response.should.have.status(200);
                done();
            })
    })
});

//DELETE route to check whether the product delete route is working
describe('DELETE /product/productdeleteroute', () => {
    it('should delete the data', (done) => {
        var id = '5bbf5f34ab18162ca8de728a';
        chai.request(app)
            .delete('/product/delete/' + id)
            .set('x-auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmJkZTg3NGZhZGY5ODJkODA3MWIyOTIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTM5MTcyNDY5fQ.n8VF3bJh66Z7LWG0mnEw42ljZwTQSkmsW_Ji81z_UG0')
            .end((error, response) => {
                console.log("i am here==:>");
                response.should.have.status(200);
                done();
            })
    })
});