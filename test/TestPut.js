const assert = require('chai').expect;
const { expect } = require('chai');
const page = require('../page/TestPutPage.js');

describe('Positif Case Put', () => {
    it('Test Update User', async() => {
        const response = await page.putRegister()
        .send({
            name: "morpheus",
            job: "zion resident"
    })
        assert(response.status).to.equal(200);
        expect(response.body).to.have.property('name', 'morpheus');
        expect(response.body).to.have.property('job', 'zion resident');

        var Put = response.body;
        console.log(Put);
    });
});
