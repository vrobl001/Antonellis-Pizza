const Customer = require('../models/customer');

module.exports = {
    index
}



function index(req, res, next) {
    Customer.find({}, function(err, customers) {
     res.render('index', {
      user: req.user
      });
   })
}
  