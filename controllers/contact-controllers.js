const { validationResult } = require("express-validator");
const sgMail = require("@sendgrid/mail");

const sendMessage = async (req, res) => {
  const errs = validationResult(req);

  if (!errs.isEmpty()) {
    return res.status(400).json({ errors: errs.array() });
  }

  const { name, email, subject, message } = req.body;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  try {
    const msg = {
      to: "khizarhashmi119@gmail.com",
      from: {
        name: "Mohd. Khizar Hashmi (Portfolio)",
        email: "khizarhashmi118@outlook.com",
      },
      subject,
      html: `
        <h3>Name: ${name}</h3>
        <h3>Email: ${email}</h3>
        <p>Message: ${message}</p>
      `,
    };

    await sgMail.send(msg);
    return res.status(200).json({ msg: "Message successfully send." });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ errors: [{ msg: "Internal server error." }] });
  }
};

module.exports = { sendMessage };
