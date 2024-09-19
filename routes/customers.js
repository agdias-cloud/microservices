const express = require('express');

const router = express.Router();

const { createCustomer, getCustomers } = require('../controllers/customers')

router.route('/')
    .post(createCustomer)
    .get(getCustomers)

module.exports = router 