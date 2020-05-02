const express = require('express');
const router = express.Router();
const menuCtrl = require('../controllers/menu');

// GET /menu/new
router.get('/', menuCtrl.index);

module.exports = router;
