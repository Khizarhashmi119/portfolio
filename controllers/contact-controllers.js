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
      to: "khizar@stepfunction.ai",
      from: {
        name: "Mohd. Khizar Hashmi",
        email: "khizarhashmi119@gmail.com",
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
    console.log("err --> ", JSON.stringify(err, undefined, 2));
    return res.status(err.code).json({ errors: [{ msg: err.message }] });
  }
};

module.exports = { sendMessage };
