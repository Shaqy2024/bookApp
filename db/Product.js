const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    img : String,
   name : String,
   discription : String,
   prise : String,
   userId : String

});

module.exports = mongoose.model("products",productSchema);