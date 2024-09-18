const mongoose = require('mongoose');


const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  accounts: [
    {
      id: Number,
      type: String,
      balance: Number
    }
  ]


})

const Customer = mongoose.model('Customer', CustomerSchema)

module.exports = Customer;