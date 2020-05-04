const Food = require('../models/food');

module.exports = {
  new: newFood,
  create,
  index,
  edit,
  update,
  deleteFood,
};

function deleteFood(req, res) {
  foodToBeDeleted = Food.findById(req.params.id);
  Food.deleteOne(foodToBeDeleted, function (err, food) {
    if (err) throw err;
    console.log('food deleted');
    res.redirect('/foods');
  });
}

function update(req, res) {
  food = Food.findById(req.params.id);
  Food.updateOne(food, req.body, function (err, food) {
    if (err) {
      return res.redirect('/foods/:id/edit');
    }
    res.redirect('/foods');
  });
}

function edit(req, res) {
  Food.findById(req.params.id, function (err, food) {
    res.render('foods/edit', { food: food });
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
