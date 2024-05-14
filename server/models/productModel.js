const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productPrice:{
        type:String,
        required:true
    },
    image:{
        type:String,
        contentType: String,
    }
})


module.exports = mongoose.model('Product', productSchema);