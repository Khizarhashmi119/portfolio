const { validationResult } = require("express-validator");

const Project = require("../models/Project");

//* @route  /api/projects
//* @desc   Get projects.
//* @access public
const get_projects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    return res.status(200).json(projects);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ errors: [{ msg: "Internal server error." }] });
  }
};

//* @route  /api/projects/:id
//* @desc   Get a project.
//* @access public
const get_project = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findById(id);
    return res.status(200).json(project);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ errors: [{ msg: "Internal server error." }] });
  }
};

//* @route  /api/projects/create
//* @desc   Add project.
//* @access private
const post_project = async (req, res) => {
  const errs = validationResult(req);

  if (!errs.isEmpty()) {
    return res.status(401).json({ errors: errs.array() });
  }

  try {
    const newProject = new Project(req.body);
    await newProject.save();
    const projects = await Project.find().sort({ createdAt: -1 });
    return res.status(200).json(projects);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ errors: [{ msg: "Internal server error." }] });
  }
};

//* @route  /api/projects/:id
//* @desc   Delete a project.
//* @access public
const delete_project = async (req, res) => {
  const { id } = req.params;
  try {
    await Project.findByIdAndDelete(id);
    const projects = await Project.find().sort({ createdAt: -1 });
    return res.status(200).json(projects);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ errors: [{ msg: "Internal server error." }] });
  }
};

//* @route  /api/project/:id
//* @desc   Update a project.
//* @access public
const put_project = async (req, res) => {
  const errs = validationResult(req);

  if (!errs.isEmpty()) {
    return res.status(401).json({ errors: errs.array() });
  }

  const { id } = req.params;

  try {
    await Project.findByIdAndUpdate(id, req.body);
    const projects = await Project.find().sort({ createdAt: -1 });
    return res.status(200).json(projects);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ errors: [{ msg: "Internal server error." }] });
  }
};

module.exports = {
  get_projects,
  get_project,
  post_project,
  delete_project,
  put_project,
};
