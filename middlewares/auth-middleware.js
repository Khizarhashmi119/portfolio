const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ msg: "No token found! Access denied." });
  }

  try {
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    req.admin = payload.admin;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ msg: "Authorization failed." });
  }
};

module.exports = authMiddleware;
