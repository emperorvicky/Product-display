const express = require('express');
const {upload} = require('../middleware/uploadMiddleware');
const router = express.Router();
const {getProducts, addProduct, deleteProduct} = require('../controllers/productController');


router.get('/get', getProducts);
router.post('/add', upload.single('image'), addProduct);
router.delete('/delete/:id', deleteProduct)


module.exports = router;
