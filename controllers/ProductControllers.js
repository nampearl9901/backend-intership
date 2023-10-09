// const { Author, Movies,Product } = require("../models/model");
const { Product,Brand } = require("../models/model");
const { mongooesToObject } = require("../util/mongoose");
const { mutipleMongooseToObject } = require("../util/mongoose");

const productController = {
//get
show : async (req, res) => {
  // [get] api/product/
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
},
productDetail : async (req, res, next) => {
  try {
    const products = await Product.findById({ _id: req.params.id });
    let totalRating = 0;
    let numReviews = 0;
  
    if (!Array.isArray(products.reviews)) {
      // Xử lý trường hợp khi products.reviews không phải là mảng, ví dụ: nếu nó là một đối tượng
      res.status(200).json({
        products: mongooesToObject(products),
        averageRating: 0, // Hoặc giá trị mặc định khác tùy vào yêu cầu của bạn
      });
    } else {
      let totalRating = 0;
      let numReviews = 0;
    
      for (const review of products.reviews) {
        totalRating += review.rating;
        numReviews++;
      }
    
      const averageRating = numReviews > 0 ? totalRating / numReviews : 0;
    
      res.status(200).json({
        products: mongooesToObject(products),
        averageRating,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
},
//[post] api/product/create-review/:id
createReviewProduct : async (req, res) => {
  try {
    const { user_id, name, avatar, rating, comment } = req.body;

    const product = await Product.findById({ _id: req.params.id });

    const newReview = {
      user_id: user_id,
      name: name,
      avatar: avatar,
      rating: rating,
      comment: comment,
      created: new Date(),
    };

    product.reviews.push(newReview);
    product.save();

    res.status(200).json({ message: "oke" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Lỗi" });
  }
}
};
module.exports = productController;

