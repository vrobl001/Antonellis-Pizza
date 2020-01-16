const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

// GET /users/new
router.get('/', usersCtrl.index);
router.get('/new', usersCtrl.new);
router.post('/', usersCtrl.create);
router.get('/users', isLoggedIn, usersCtrl.index);
router.post('/facts', isLoggedIn, usersCtrl.addFact);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }

module.exports = router;