const express = require("express");
const { check } = require("express-validator");

const { sendMessage } = require("../../../controllers/contact-controllers");

const router = express.Router();

router.post(
  "/",
  [
    check("name", "Name is required.").notEmpty(),
    check("email", "Email is required.").isEmail(),
    check("subject", "Subject is required.").notEmpty(),
    check("message", "Message is required.").notEmpty(),
  ],
  sendMessage
);

module.exports = router;
