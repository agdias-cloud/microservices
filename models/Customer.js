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
      balance: mongoose.Decimal128
    }
  ]


})

module.exports = mongoose.model('Customer', CustomerSchema );