const express = require("express");
const { check } = require("express-validator");

const {
  get_projects,
  post_project,
  delete_project,
  put_project,
} = require("../controllers/projects-controllers");
const authMiddleware = require("../middlewares/auth-middleware");

const router = express.Router();

router.get("/", get_projects);
router.post(
  "/create",
  [
    authMiddleware,
    [
      check("title", "Title is required.").notEmpty(),
      check("detail", "Detail is required.").notEmpty(),
      check("image", "Image is required.").notEmpty(),
    ],
  ],
  post_project
);
router.delete("/:id", authMiddleware, delete_project);
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
  put_project
);

module.exports = router;
