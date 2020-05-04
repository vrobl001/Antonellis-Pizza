const express = require('express');
const router = express.Router();
const foodsCtrl = require('../controllers/food');

// GET /foods/new
router.get('/', foodsCtrl.index);
router.post('/', foodsCtrl.create);
router.get('/new', foodsCtrl.new);
router.get('/:id/edit', foodsCtrl.edit);

// Update
router.put('/:id', foodsCtrl.update);

// Delete
router.delete('/:id', foodsCtrl.deleteFood);

module.exports = router;
