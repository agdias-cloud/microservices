const Customer = require('../models/Customer')

exports.createCustomer = async (req, res, next) => {

  try {
    const customer = await Customer.create(req.body);

    res.status(201).json({
      success: true,
      data: customer
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error
    })
  }

}

