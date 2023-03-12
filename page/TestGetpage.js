const supertest = require('supertest');
const env = require('dotenv').config();
const api = supertest(process.env.endpoint);

//GET
const testGet = () => api.get('/api/users/2')

module.exports = {
    testGet
} 