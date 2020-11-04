const express = require("express");
const { check } = require("express-validator");

const authMiddleware = require("../middlewares/auth-middleware");
const {
  get_skills,
  post_skill,
  delete_skill,
  put_skill,
} = require("../controllers/skills-controllers");

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

module.exports = router;
