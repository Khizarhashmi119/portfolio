const express = require("express");
const { check } = require("express-validator");

const { login } = require("../../../controllers/auth-controllers");

const router = express.Router();

router.post(
  "/login",
  [
    check("email", "Email is required and should be valid.")
      .notEmpty()
      .isEmail(),
    check("password", "Password is required.").notEmpty(),
  ],
  login
);

module.exports = router;
