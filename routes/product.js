const productController = require('../controllers/ProductControllers');

const router = require('express').Router();

//get
router.get('/', productController.show);
router.post("/create-review/:id", productController.createReviewProduct );
//router.post("/create-review/:id",AuthenticationAccount, createReviewProduct );
router.get("/:id", productController.productDetail );



module.exports = router;