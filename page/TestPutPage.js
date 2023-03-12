const supertest = require('supertest');
const env = require('dotenv').config();
const api = supertest(process.env.endpoint);

// PUT
const putRegister = () => api.patch('/api/users/2')

module.exports = {
    putRegister
} 