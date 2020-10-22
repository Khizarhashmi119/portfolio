const express = require("express");
const { check } = require("express-validator");
const multer = require("multer");
const _ = require("lodash");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./client/public/uploads");
  },
  filename: (req, file, cb) => {
    const fileName = `${_.kebabCase(req.body.title)}-image-${Date.now()}.png`;
    cb(null, fileName);
  },
});
const upload = multer({ storage });

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
    upload.single("image"),
    [
      check("title", "Title is required.").notEmpty(),
      check("detail", "Detail is required.").notEmpty(),
    ],
  ],
  post_project
);
router.delete("/:id", authMiddleware, delete_project);
router.put(
  "/:id",
  [
    authMiddleware,
    upload.single("image"),
    [
      check("title", "Title is required.").notEmpty(),
      check("detail", "Detail is required.").notEmpty(),
    ],
  ],
  put_project
);

module.exports = router;
