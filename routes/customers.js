const express = require('express');
const router = express.Router();
const customersCtrl = require('../controllers/customer');

// GET /customers/new
router.get('/', customersCtrl.index);
router.get('/new', customersCtrl.new);
router.post('/customers', customersCtrl.create);
router.get('/customers', isLoggedIn, customersCtrl.index);
router.post('/facts', isLoggedIn, customersCtrl.addFact);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }

module.exports = router;