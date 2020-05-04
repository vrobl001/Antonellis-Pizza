const Food = require('../models/food');
const Customer = require('../models/customer');

module.exports = {
  index,
};

function index(req, res) {
  Food.find({ "catering": true }, function (err, foods) {
    res.render('catering/index', {
      foods,
      user: req.user,
    });
  });
}
