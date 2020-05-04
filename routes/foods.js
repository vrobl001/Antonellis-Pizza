const express = require('express');
const router = express.Router();
const foodsCtrl = require('../controllers/food');

// GET /foods/new
router.get('/', isLoggedIn, foodsCtrl.index);
router.post('/', isLoggedIn, foodsCtrl.create);
router.get('/new', isLoggedIn, foodsCtrl.new);
router.get('/:id/edit', isLoggedIn, foodsCtrl.edit);

// Update
router.put('/:id', foodsCtrl.update);

// Delete
router.delete('/:id', foodsCtrl.deleteFood);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.send('Not Authorized');
  }

module.exports = router;
