const express = require('express');
const productController = require('../controllers/productController')



const router = express.Router();

router.get('/products', productController.getAll )
router.post('/products', productController.create)
router.put('/products/:id', productController.update)
router.delete('/products/:id', productController.del);

module.exports = router;