const brandController = require('../controllers/BrandControllers');

const router = require('express').Router();

// Add Author
router.post('/postBrand', brandController.addBrand);
//get Author
router.get('/getBrand', brandController.getAllBrand);



module.exports = router;