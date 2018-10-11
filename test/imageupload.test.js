const expect = require('expect');
const request = require('supertest');
const { app } = require('../Express/express.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('POST imageupload/imageuploadroute',()=>{
    it('should upload an image',(done)=>{
        var id ='5bbde956bd66c21378476f54';
        chai.request(app)
            .post('/userimageupload/'+id)
            .field('Content-Type', 'multipart/form-data')
            .attach('Image','C:/Users/vivek/Pictures/Capture.PNG')
            .end((error,response)=>{
                response.should.have.status(200);
                done();
            })
    })
})