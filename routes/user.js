
const userController = require('../controllers/UserController');
const detailsUserController = require('../controllers/UserController');
const createUserController = require('../controllers/UserController');
const express = require("express");
const router = express.Router();

router.get("/", userController);
router.get("/details", detailsUserController);

router.post("/user", createUserController);

module.exports = router;
