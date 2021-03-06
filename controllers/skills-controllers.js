const { validationResult } = require("express-validator");
const Skill = require("../models/Skill");

//* @route  /api/skills
//* @desc   Get skills.
//* @access public
const get_skills = async (req, res) => {
  try {
    const skills = await Skill.find();
    return res.status(200).json(skills);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ errors: [{ msg: "Internal server error." }] });
  }
};

//* @route  /api/skills/create
//* @desc   Add skill.
//* @access public
const post_skill = async (req, res) => {
  const errs = validationResult(req);

  if (!errs.isEmpty()) {
    return res.status(400).json({ errors: errs.array() });
  }

  try {
    const newSkill = new Skill(req.body);
    await newSkill.save();
    return res.status(200).json(newSkill);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ errors: [{ msg: "Internal server error." }] });
  }
};

//* @route  /api/skills/:id
//* @desc   Delete a skill.
//* @access private
const delete_skill = async (req, res) => {
  const { id } = req.params;
  try {
    await Skill.findByIdAndDelete(id);
    return res.status(200).json("Skill deleted.");
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ errors: [{ msg: "Internal server error." }] });
  }
};

module.exports = { get_skills, post_skill, delete_skill };
