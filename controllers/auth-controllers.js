const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const Admin = require("../models/Admin");

//* @route  /api/auth/login
//* @desc   Login controller.
//* @access public
const login = async (req, res) => {
  const errs = validationResult(req);

  if (!errs.isEmpty()) {
    return res.status(400).json({ errors: errs.array() });
  }

  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Invalid credentials." }] });
    }

    if (!admin.checkPassword(password)) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Invalid credentials." }] });
    }

    const payload = {
      admin: {
        id: admin._id,
      },
    };

    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: 3600,
    });

    return res.status(200).json({ token });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ errors: [{ msg: "Internal server error." }] });
  }
};

module.exports = { login };
