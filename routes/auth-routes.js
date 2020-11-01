import express from "express";
import { check } from "express-validator";

import { login } from "../controllers/auth-controllers.js";

const router = express.Router();

router.post(
  "/login",
  [
    check("email", "Email is required.").notEmpty().isEmail(),
    check("password", "Password is required.").notEmpty(),
  ],
  login
);

export default router;
