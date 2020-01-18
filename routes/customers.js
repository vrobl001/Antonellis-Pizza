const express = require('express');
const router = express.Router();
const customersCtrl = require('../controllers/customer');

// GET /customers/new
router.get('/', customersCtrl.index);
router.get('/new', customersCtrl.new);
router.post('/customers', customersCtrl.create);
router.get('/customers', isLoggedIn, customersCtrl.index);
router.put('/:id', customersCtrl.update);
router.get('/:id/edit',  customersCtrl.edit); //isLoggedIn

// Update

// Delete
router.delete('/:id', (req, res) => {
  res.send('Delete Customer Info ' + req.params.id)
})

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }

module.exports = router;