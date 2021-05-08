const express = require("express");
const { check } = require("express-validator");

const {
  getProjects,
  addProject,
  deleteProject,
  updateProject,
} = require("../controllers/projects-controllers");
const authMiddleware = require("../middlewares/auth-middleware");

const router = express.Router();

router.get("/", getProjects);
router.post(
  "/",
  [
    authMiddleware,
    [
      check("title", "Title is required.").notEmpty(),
      check("detail", "Detail is required.").notEmpty(),
      check("image", "Image is required.").notEmpty(),
    ],
  ],
  addProject
);
router.delete("/:id", authMiddleware, deleteProject);
router.put(
  "/:id",
  [
    authMiddleware,
    [
      check("title", "Title is required.").notEmpty(),
      check("detail", "Detail is required.").notEmpty(),
      check("image", "Image is required.").notEmpty(),
    ],
  ],
  updateProject
);

module.exports = router;
