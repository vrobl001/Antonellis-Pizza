const Food = require('../models/food');

module.exports = {
  new: newFood,
  create,
  index,
  edit,
  update,
};

function update(req, res) {
  Food.findById(req.params.id, function (err, food) {
    food._id = req.params._id;
    food.name = req.body.name;
    food.category = req.body.name;
    food.price = req.body.price;
    food.description = req.body.description;
    food.save(function (err) {
      if (err) return res.redirect('foods/edit', { food: food, error: err });
      res.render('foods/edit', { food: food });
    });
  });
}

function edit(req, res) {
  Food.findById(req.params.id, function (err, food) {
    res.render('foods/:id/edit', { food: food });
  });
}

function create(req, res) {
  const food = new Food(req.body);
  food.save(function (err) {
    if (err) {
      console.log(err);
      return res.render('foods/new');
    }
    res.redirect('/foods');
  });
}

function newFood(req, res) {
  res.render('foods/new', { title: 'Add Food' });
}

function index(req, res) {
  Food.find({}, function (err, foods) {
    res.render('foods/index', {
      foods,
    });
  });
}
