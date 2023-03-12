const assert = require('chai').expect;
const { expect } = require('chai');
const page = require('../page/TestDeletePage.js');

describe('Positif Case Delete', () => {
    it('Test Register', async() => {
        const response = await page.testDelete()
        .send({
            name: "morpheus",
            job: "leader"
    })
    var Delete = response.body;
        expect(response.status).to.equal(204);
        console.log(Delete);
    });
});