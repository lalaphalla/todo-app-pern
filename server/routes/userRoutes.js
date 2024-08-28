const express = require("express");
const userController = require("../controllers/userController");
const authController = require('../controllers/authController')

const router = express.Router();

router.route("/sigup").post(authController.signup)
router.route("/login").post(authController.login)
router
  .route("/")
  .post(userController.createUser)
  .get(userController.getAllUsers);

module.exports = router;
