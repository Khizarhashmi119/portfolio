const { validationResult } = require("express-validator");
const Skill = require("../models/Skill");

// @route  /api/v1/skills
// @desc   Get skills.
// @access public
const getSkills = async (req, res) => {
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

// @route  /api/v1/skills/
// @desc   Add skill.
// @access public
const addSkill = async (req, res) => {
  const errs = validationResult(req);

  if (!errs.isEmpty()) {
    return res.status(400).json({ errors: errs.array() });
  }

  const { skill } = req.body;

  try {
    const newSkill = new Skill({
      text: skill,
    });

    await newSkill.save();
    return res.status(200).json(newSkill);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ errors: [{ msg: "Internal server error." }] });
  }
};

// @route  /api/v1/skills/:id
// @desc   Delete a skill.
// @access private
const deleteSkill = async (req, res) => {
  const { id } = req.params;

  try {
    await Skill.findByIdAndDelete(id);
    return res.status(200).json({ msg: "Skill successfully deleted." });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ errors: [{ msg: "Internal server error." }] });
  }
};

module.exports = { getSkills, addSkill, deleteSkill };
