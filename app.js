require("dotenv").config();
const express = require("express");
const path = require("path");

const connectDB = require("./db");
const projectsRoutes = require("./routes/projects-routes");
const authRoutes = require("./routes/auth-routes");
const skillRoutes = require("./routes/skill-routes");

const app = express();

const PORT = process.env.PORT;

//* Connect to database.
connectDB();

//* Middlewares.
app.use(express.json({ extended: false }));

if (process.env.NODE_ENV === "development") {
  app.use(express.static(path.join(__dirname, "client", "public")));
  app.use(require("morgan")("dev"));
}

//* API routes.
app.get("/api/", (req, res) => {
  res.json({ msg: "API is running..." });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/skills", skillRoutes);

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode at port ${PORT}`
  )
);
