const Food = require('../models/food');

module.exports = {
  index,
};

function index(req, res) {
  Food.find({"catering": false}, function (err, foods) {
    res.render('menu/index', {
      foods,
    });
  });
}
