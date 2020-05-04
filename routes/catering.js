const express = require('express');
const router = express.Router();
const cateringCtrl = require('../controllers/catering');

// GET
router.get('/', cateringCtrl.index);

module.exports = router;
