const Customer = require('../models/customer');

module.exports = {
    new: newCustomer,
    create,
    index,
    addFact,
};

function addFact(req, res) {
    req.user.facts.push(req.body);
    req.user.save(function(err) {
      res.redirect('/customers');
    });
  }

function index(req, res) {
    Customer.find({}, function(err, customers) {
        res.render('customers/index', {
            customers,
            user: req.user
        });
    });
}

function create(req, res) {
    const customer = new Customer(req.body);
    customer.save(function(err) {
        if(err) return res.render('customers/new');
        console.log(customer);
        res.redirect('/customers');
    });
}

function newCustomer(req, res) {
    res.render('customers/new');
}