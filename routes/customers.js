const express = require('express');
const router = express.Router();
const customersCtrl = require('../controllers/customer');

// GET /customers/new
router.get('/', isLoggedIn, customersCtrl.index);
router.post('/', customersCtrl.create);
router.get('/new', customersCtrl.new);
router.get('/:id/edit', isLoggedIn,  customersCtrl.edit); 

// Update
router.put('/:id', isLoggedIn, customersCtrl.update);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

module.exports = router;
