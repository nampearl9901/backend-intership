const mongoose = require("mongoose");

// Định nghĩa Schema và Model cho MongoDB

const brandSchema = new mongoose.Schema({
  name: String,
  Description: String,
});

  const productShema = new mongoose.Schema({
    brandID:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Brand',  
    },
    model:{
      type:String,
      required: true,
    },
    color:{
      type:String,
      required: true,
    },
    price:{
      type:String,
      required: true,
    },
    img:{
      type: String, 

    }

   
})

  let Product = mongoose.model("product",productShema);
  let Brand = mongoose.model("brand",brandSchema);
  module.exports = {Product,Brand};  
 