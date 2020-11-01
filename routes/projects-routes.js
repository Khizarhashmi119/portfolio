import express from "express";
import { check } from "express-validator";
import multer from "multer";
import _ from "lodash";

import {
  get_projects,
  post_project,
  delete_project,
  put_project,
} from "../controllers/projects-controllers.js";
import authMiddleware from "../middlewares/auth-middleware.js";

const router = express.Router();

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

export default router;
