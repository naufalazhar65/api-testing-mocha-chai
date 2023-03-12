const supertest = require('supertest');
const env = require('dotenv').config();
const api = supertest(process.env.endpoint);

const testDelete = () => api.delete('/api/users/2')


module.exports = {
    testDelete
} 