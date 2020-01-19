const express = require('express');
const router = express.Router();
const customersCtrl = require('../controllers/customer');

// GET /customers/new
router.get('/', customersCtrl.index);
router.get('/new', customersCtrl.new);
router.post('/', customersCtrl.create);

router.put('/:id', isLoggedIn, customersCtrl.update);
router.get('/:id/edit', isLoggedIn,  customersCtrl.edit); 

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