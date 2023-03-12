const assert = require('chai').expect;
const { expect } = require('chai');
const page = require('../page/TestLoginPage.js');

describe('Positif Case Register', () => {
    it('Test Login', async() => {
        const response = await page.testLogin()
        .send({
            email: "eve.holt@reqres.in",
            password: "pistol"
    })
    var Register = response.body;
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('id', 4);
        expect(response.body).to.have.property('token');
        console.log(Register);
    });
});