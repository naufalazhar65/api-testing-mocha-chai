const supertest = require('supertest');
const env = require('dotenv').config();
const api = supertest(process.env.endpoint);

const testLogin = () => api.post('/api/register')


module.exports = {
    testLogin
} 