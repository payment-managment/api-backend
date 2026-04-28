const express = require('express');
const categoryController = require('../controllers/categoryController')

const router = express.Router();

router.get('/category', categoryController.getAll)
router.post('/category', categoryController.create)
router.put('/category/:id', categoryController.update)
router.delete('/category/:id', categoryController.del);

module.exports = router;
