const Customer = require('../models/Customer')

exports.createCustomer = async (req, res, next) => {
  console.log(req.body.name)
  try {
    const customerObject = {
      name: req.body.name,
      email: req.body.email,
      accounts: JSON.stringify(req.body.accounts)
    }

    console.log(customerObject)

    const customer = await Customer.create(customerObject);

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

exports.getCustomers = async (req, res, next) => {
  try {
    const customers = await Customer.find();
    res.status(200).json({
      success: true,
      data: customers
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      data: error
    })

  }


}

