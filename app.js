import { config } from "dotenv";
import express from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";

import connectDB from "./db.js";
import projectsRoutes from "./routes/projects-routes.js";
import authRoutes from "./routes/auth-routes.js";
import skillRoutes from "./routes/skill-routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

if (process.env.NODE_ENV === "development") {
  config();
}

//* Connect to database.
connectDB();

//* Middlewares.
app.use(express.json({ extended: false }));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//* API routes.
app.get("/api/", (req, res) => {
  res.json({ msg: "API is running..." });
});

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/skills", skillRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(join(__dirname, "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(
  process.env.PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode at port ${process.env.PORT}`
  )
);
