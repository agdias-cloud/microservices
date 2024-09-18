const express = require('express');
const dotenv = require('dotenv').config();
const { customers } = require('./routes/customers');

const app = express();
app.use('/api/v1/customers', customers);
app.use(express.json());
const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));