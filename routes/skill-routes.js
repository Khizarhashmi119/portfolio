const express = require("express");
const { check } = require("express-validator");

const authMiddleware = require("../middlewares/auth-middleware");
const {
  getSkills,
  addSkill,
  deleteSkill,
} = require("../controllers/skills-controllers");

const router = express.Router();

router.get("/", getSkills);
router.post(
  "/create",
  [authMiddleware, [check("skill", "Skill is required.").notEmpty()]],
  addSkill
);
router.delete("/:id", authMiddleware, deleteSkill);

module.exports = router;
