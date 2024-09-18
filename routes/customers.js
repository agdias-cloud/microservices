const express = require('express');

const router = express.Router();

const { createCustomer } = require('../controllers/customers')

router.route('/').post(createCustomer);

module.exports = { router }