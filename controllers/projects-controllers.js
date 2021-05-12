const { validationResult } = require("express-validator");

const Project = require("../models/Project");

// @route  /api/projects
// @desc   Get projects.
// @access public
const getProjects = async (req, res) => {
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

// @route  /api/project/:id
// @desc   Get project.
// @access public
const getProject = async (req, res) => {
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

// @route  /api/projects/
// @desc   Add project.
// @access private
const addProject = async (req, res) => {
  const errs = validationResult(req);

  if (!errs.isEmpty()) {
    return res.status(400).json({ errors: errs.array() });
  }

  const { title, detail, tags, repo, link, image } = req.body;

  try {
    const newProject = new Project({
      title,
      detail,
      tags: tags.split(",").map((tag) => tag.trim()),
      repo,
      link,
      image,
    });
    await newProject.save();
    return res.status(200).json(newProject);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ errors: [{ msg: "Internal server error." }] });
  }
};

// @route  /api/projects/:id
// @desc   Delete a project.
// @access public
const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    await Project.findByIdAndRemove(id);
    return res.status(200).json({ msg: "Project deleted." });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ errors: [{ msg: "Internal server error." }] });
  }
};

// @route  /api/project/:id
// @desc   Update a project.
// @access public
const updateProject = async (req, res) => {
  const errs = validationResult(req);

  if (!errs.isEmpty()) {
    return res.status(400).json({ errors: errs.array() });
  }

  const { id } = req.params;
  const { title, detail, tags, repo, link, image } = req.body;

  try {
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      {
        $set: {
          title,
          detail,
          tags: tags.split(",").map((tag) => tag.trim()),
          repo,
          link,
          image,
        },
      },
      {
        new: true,
      }
    );

    return res.status(200).json(updatedProject);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ errors: [{ msg: "Internal server error." }] });
  }
};

module.exports = {
  getProjects,
  getProject,
  addProject,
  deleteProject,
  updateProject,
};
