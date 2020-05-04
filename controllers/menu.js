const Food = require('../models/food');
const Customer = require('../models/customer');

module.exports = {
  index,
};

function index(req, res) {
  Food.find({"catering": false}, function (err, foods) {
    res.render('menu/index', {
      foods,
      user: req.user
    });
  });
}
