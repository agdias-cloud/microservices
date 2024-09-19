const mongoose = require('mongoose');

const { Schema, model } = mongoose;
const AccountSchema = new Schema({

    type: {
        required: true,
        type: String
    },
    balance: {
        type: Number,
        default: 0
    },
    transactions: [
        {


        }
    ]

})