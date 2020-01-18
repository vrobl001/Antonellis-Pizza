const Customer = require('../models/customer');

module.exports = {
    new: newCustomer,
    create,
    index,
    edit,
    update
};

function update(req, res) {
    Customer.findById(req.params.id, function(err, customer) {
        customer._id = req.params._id
        customer.name = req.body.name
        customer.email = req.body.email
        customer.phone = req.body.phone
        customer.addressName = req.body.addressName
        customer.addressT = req.body.addressT
        customer.location = req.body.location
        customer.apt = req.body.apt
        customer.city = req.body.city
        customer.state = req.body.state
        customer.zip = req.body.zip
        customer.deliveryNotes = req.body.deliveryNotes
        console.log(customer)
        customer.save(function(err) {
            if(err) return res.redirect('customers/edit', { customer: customer, error: err });
            res.render('customers/edit', { customer: customer });
        });
    
    })
};

function edit(req, res) {
    Customer.findById(req.params.id, function(err, customer) {
        res.render('customers/edit', { customer: customer })
    })
};

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
        res.redirect('/customers');
    });
}

function newCustomer(req, res) {
    res.render('customers/new');
}