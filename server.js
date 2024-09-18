const express = require('express');
const dotenv = require('dotenv').config();
const customers = require('./routes/customers');
const connectDB = require('./config/db');
const colors = require('colors');

const app = express();
app.use(express.json());
app.use('/api/v1/customers', customers);


const port = process.env.PORT || 3000;

connectDB();

app.listen(port, () => console.log(`Server running on port ${port}`));