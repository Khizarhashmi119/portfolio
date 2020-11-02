import express from "express";
import { check } from "express-validator";

import {
  get_projects,
  post_project,
  delete_project,
  put_project,
} from "../controllers/projects-controllers.js";
import authMiddleware from "../middlewares/auth-middleware.js";

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

export default router;
