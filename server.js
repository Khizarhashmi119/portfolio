const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const authRoutes = require("./routes/api/v1/auth-routes");
const connectDB = require("./db");
const contactRoutes = require("./routes/api/v1/contact-routes");
const projectsRoutes = require("./routes/api/v1/projects-routes");
const skillRoutes = require("./routes/api/v1/skill-routes");

const app = express();

dotenv.config();
// Connect to database.
// connectDB();

// Middlewares.
app.use(cors());
app.use(express.json());
app.use("/api/v1", express.static("uploads"));

if (process.env.NODE_ENV === "development") {
  app.use(require("morgan")("dev"));
}

// API routes.
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/projects", projectsRoutes);
app.use("/api/v1/skills", skillRoutes);
app.use("/api/v1/contact", contactRoutes);

app.listen(process.env.PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode at port ${process.env.PORT}`
  )
);
