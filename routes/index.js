const express = require('express');
const router = express.Router();
const passport = require('passport');
const indexCtrl = require('../controllers/index');


router.get('/', indexCtrl.index);
router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email', 'https://www.googleapis.com/auth/user.phonenumbers.read'] }
  ));

module.exports = router;