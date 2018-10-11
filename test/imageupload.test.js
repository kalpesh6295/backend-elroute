const expect = require('expect');
const request = require('supertest');
const { app } = require('../Express/express.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

//POST testing routing to check wheather user image is uploaded into the database of AWS
describe('POST imageupload/imageuploadroute',()=>{
    it('should upload an image',(done)=>{
        var id ='5bbde956bd66c21378476f54';
        chai.request(app)
            .post('/userimageupload/'+id)
            .field('Content-Type', 'multipart/form-data')
            .attach('Image','C:/Users/vivek/Pictures/Capture.PNG')                              //Attaching an image with the file
            .end((error,response)=>{
                response.should.have.status(200);
                done();
            })
    })
})