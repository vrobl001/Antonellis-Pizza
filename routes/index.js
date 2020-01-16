const express = require('express');
const router = express.Router();
const passport = require('passport');
const indexCtrl = require('../controllers/index');


router.get('/', indexCtrl.index);
router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email', 'https://www.googleapis.com/auth/user.phonenumbers.read'] }
  ));
 
// Google OAuth callback route  
router.get('/oauth2callback', passport.authenticate(
'google',
{
    successRedirect : '/users',
    failureRedirect : '/'
}
));

// OAuth logout route
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

module.exports = router;