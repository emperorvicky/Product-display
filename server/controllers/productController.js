const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');
const { Resize} = require('../middleware/uploadMiddleware');
const path = require('path');
const fs = require('fs')

const getProducts = asyncHandler(async(req, res) => {

    try {
        const allProducts = await Product.find({});
        res.status(200).json(allProducts);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

const addProduct = asyncHandler(async (req, res) => {
    const { productName, productPrice} = req.body;
  
    if (!productName || !productPrice || !req.file) {
      return res.status(400).json({ error: 'Please provide name, price, and image data for the product.' });
    }

    try{
      const imagePath = path.join(__dirname, '../public/images');
      const fileUpload = new Resize(imagePath);
      const filename = await fileUpload.save(req.file.buffer)

    const newProduct = await Product.create({
      productName,
      productPrice,
      image:filename
    });   
    
  
    if (newProduct) {
      res.status(201).json({
        success: true,
        message: 'Product has been successfully added ',
      });
    } else {
      res.status(400).json({
        success: false,
        error: "Product wasn't added",
      });
    }    
    } catch(error){
      console.error('Error adding product:', error);
      res.status(500).json({ error: 'Internal Server Error' });      
    }
  


  });

const deleteProduct = asyncHandler(async(req, res) => {
    const productId = req.params.id;

    try{
      const product = await Product.findById(productId);
      if(!product){
        return res.status(404).json({error: 'Product not found'});

      }
      const imagePath = path.join(__dirname, '../public/images');
      const filePath = path.resolve(`${imagePath}/${product.image}`);

      fs.unlink(filePath, async(err) => {
        if(err) {
          console.error('Error deleting image file:', err);
          return res.status(500).json({error: 'Internal Server Error'});
        }

        await Product.findByIdAndDelete(productId);

        res.status(200).json({success:true, message: 'Product deleted successfully'})
      });
    } catch(error){
      console.error('Error deleting product:', error);
      res.status(500).json({error: 'Internal Server Error'});
    }
  })
  




module.exports = {
    getProducts,
    addProduct,
    deleteProduct

}