const Customer = require('../models/customer');

module.exports = {
  new: newCustomer,
  create,
  index,
  edit,
  update,
};

function update(req, res) {
  customer = Customer.findById(req.params.id);
  Customer.updateOne(customer, req.body, function (err, customer) {
    if (err) {
      return res.redirect('/customers/:id/edit');
    }
    res.redirect('/customers');
  });
}

function edit(req, res) {
  Customer.findById(req.params.id, function (err, customer) {
    res.render('customers/edit', { 
      customer: customer, 
      user: req.user,
    });
  });
}


function index(req, res) {
  Customer.find({}, function (err, customers) {
    res.render('customers/index', {
      customers,
      user: req.user,
    });
  });
}

function create(req, res) {
  const customer = new Customer(req.body);
  customer.save(function (err) {
    if (err) return res.render('customers/new');
    res.redirect('/customers');
  });
}

function newCustomer(req, res) {
  res.render('customers/new');
}
