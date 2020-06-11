const express = require('express');
const router = express.Router();
const blogCtrl = require('../controllers/blog');

// GET /blog/new
router.get('/', blogCtrl.index);
router.post('/', blogCtrl.create);
router.get('/new', blogCtrl.new);
router.get('/:id/edit', blogCtrl.edit);

// Update
router.put('/:id', blogCtrl.update);

// Delete
router.delete('/:id', blogCtrl.deleteBlog);



module.exports = router;
