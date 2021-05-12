const express = require("express");
const { check } = require("express-validator");
const multer = require("multer");
const _ = require("lodash");

const {
  getProjects,
  getProject,
  addProject,
  deleteProject,
  updateProject,
} = require("../controllers/projects-controllers");
const authMiddleware = require("../middlewares/auth-middleware");

const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./client/public/uploads");
  },
  filename: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      let type = "";
      switch (file.mimetype) {
        case "image/png":
          type = ".png";
          break;
        case "image/jpg":
          type = ".jpg";
          break;
        case "image/jpeg":
          type = ".jpeg";
      }

      const fileName = `${_.kebabCase(req.body.title)}-${
        file.fieldname
      }-${Date.now()}${type}`;
      cb(null, fileName);
    } else {
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});
const upload = multer({ storage });

router.get("/", getProjects);
router.get("/:id", getProject);
router.post(
  "/",
  authMiddleware,
  upload.single("image"),
  [
    check("title", "Title is required.").notEmpty(),
    check("detail", "Detail is required.").notEmpty(),
  ],
  addProject
);
router.delete("/:id", authMiddleware, deleteProject);
router.put(
  "/:id",
  authMiddleware,
  upload.single("image"),
  [
    check("title", "Title is required.").notEmpty(),
    check("detail", "Detail is required.").notEmpty(),
  ],
  updateProject
);

module.exports = router;
