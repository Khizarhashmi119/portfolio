if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}
const express = require("express");
const path = require("path");

const connectDB = require("./db");
const projectsRoutes = require("./routes/projects-routes");
const authRoutes = require("./routes/auth-routes");
const skillRoutes = require("./routes/skill-routes");

const app = express();

//* Connect to database.
connectDB();

//* Middlewares.
app.use(express.json({ extended: false }));

if (process.env.NODE_ENV === "development") {
  app.use(require("morgan")("dev"));
}

//* API routes.
app.get("/api/", (req, res) => {
  res.json({ msg: "API is running..." });
});

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/skills", skillRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(
  process.env.PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode at port ${process.env.PORT}`
  )
);
