import express from "express";
import { check } from "express-validator";

import authMiddleware from "../middlewares/auth-middleware.js";
import {
  get_skills,
  post_skill,
  delete_skill,
  put_skill,
} from "../controllers/skills-controllers.js";

const router = express.Router();

router.get("/", get_skills);
router.post(
  "/create",
  [authMiddleware, [check("skill", "Skill is required.").notEmpty()]],
  post_skill
);
router.delete("/:id", authMiddleware, delete_skill);
router.put(
  "/:id",
  [authMiddleware, [check("skill", "Skill is required.").notEmpty()]],
  put_skill
);

export default router;
