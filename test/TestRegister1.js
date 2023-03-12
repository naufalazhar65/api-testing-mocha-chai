// const assert = require('chai').expect;
// const { expect } = require('chai');
// const page = require('../page/TestRegisterPage.js');

// describe('Positif Case', () => {
//     it('Test Register', async() => {
//         const response = await page.postRegister()
//         .send({
//             name: "morpheus",
//             job: "leader"
//     })
//     var Register = response.body;
//         expect(response.status).to.equal(201);
//         expect(response.body).to.be.an('object');
//         expect(response.body).to.have.property('id');
//         expect(response.body).to.have.property('createdAt');
//         expect(response.body).to.have.property('name', 'morpheus');
//         expect(response.body).to.have.property('job', 'leader');
//         console.log(Register);
//     });
// });

// describe('Positif Case', () => {
//     it('Test Update', async() => {
//         const response = await page.putRegister()
//         .send({
//             name: "morpheus",
//             job: "zion resident"
//     })
//         expect(response.status).to.equal(200);
//         var Register = response.body;
//         console.log(Register);
//     });
// });

// describe('Negative Case', () => {
//     it('Test Register fail', async() => {
//         const response = await page.postRegisterFail()
//         .send({
//             email: "sydney@fife"
//     })
//         assert(response.status).to.equal(400);
//         assert(response.text).to.include("Missing password");


//         var Register = response.body;
//         console.log(Register);
//     });
// });

// describe('Positif Case', () => {
//     it('Test Get', async() => {
//         const response = await page.testGet()
//         assert(response.status).to.equal(200);
//         var Register = response.body;
//         console.log(Register);
//     });
// });

// // describe('API Testing', () => {
// //     it('should return 200 status code and Hello World message', async () => {
// //       const response = await supertest(app).get('/');
// //       expect(response.status).to.equal(200);
// //       expect(response.body.message).to.equal('Hello World');
// //     });

// //     it('should return 404 status code and error message for invalid endpoint', async () => {
// //       const response = await supertest(app).get('/invalid-endpoint');
// //       expect(response.status).to.equal(404);
// //       expect(response.body.message).to.equal('Endpoint not found');
// //     });
// //   });