if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const projectsRoutes = require("./routes/projects-routes");
const authRoutes = require("./routes/auth-routes");

const app = express();

const PORT = process.env.PORT || 5000;

//* Connect to database.
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("MongoDB is connected...");
    app.listen(PORT, () => console.log(`Server is running at port ${PORT}...`));
  })
  .catch((err) => console.log(err));

//* Middlewares.
app.use(express.json({ extended: false }));
app.use(express.static("./client/public"));
app.use(morgan("dev"));

//* API routes.
app.get("/api/", (req, res) => {
  res.json({ msg: "API is running..." });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectsRoutes);
