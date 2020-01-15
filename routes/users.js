const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

// GET /users/new
router.get('/new', usersCtrl.new);
router.post('/', usersCtrl.create);
router.get('/', usersCtrl.index);

module.exports = router;