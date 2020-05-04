const Food = require('../models/food');

module.exports = {
  index,
};

function index(req, res) {
  Food.find({ "catering": true }, function (err, foods) {
    res.render('catering/index', {
      foods,
    });
  });
}
