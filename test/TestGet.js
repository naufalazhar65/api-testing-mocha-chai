const assert = require('chai').expect;
const { expect } = require('chai');
const page = require('../page/TestGetPage.js');

describe('Positif Case Get', () => {
    it('Test Get', async() => {
        const response = await page.testGet()
    
    var Get = response.body;
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('object');
        expect(response.body.data).to.have.property('id', 2);
        expect(response.body.data).to.have.property('email', 'janet.weaver@reqres.in');
        // expect(response.body.data).to.have.property('name', 'morpheus');
        // expect(response.body.data).to.have.property('job', 'leader');
        console.log(Get);
    });
});
