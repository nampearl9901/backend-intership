// const { Author, Movies,Product } = require("../models/model");
const { Brand } = require("../models/model");

const brandController = {
//   //add author
  addBrand: async (req, res) => {
    try {
      const newBrand = new Brand(req.body);
      const saveBrand = await newBrand.save();
      res.status(200).json(saveBrand);
    } catch (err) {
      res.status(500).json(err); //http
    }
  },
  // get all author
  getAllBrand: async (req, res) => {
    try {
        const brand =await Brand.find();
        res.status(200).json(brand);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
module.exports = brandController;