const { validationResult } = require("express-validator");
const fs = require("fs");

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

//* @route  /api/projects/create
//* @desc   Add project.
//* @access private
const post_project = async (req, res) => {
  const errs = validationResult(req);

  if (!errs.isEmpty()) {
    return res.status(400).json({ errors: errs.array() });
  }

  const { title, detail, repo, link } = req.body;
  const { filename } = req.file;

  try {
    const newProject = new Project({
      title,
      detail,
      repo,
      link,
      image: filename,
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

//* @route  /api/projects/:id
//* @desc   Delete a project.
//* @access public
const delete_project = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findById(id);
    const imagePath = `./client/public/uploads/${project.image}`;

    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    await project.remove();
    return res.status(200).json({ msg: "Project deleted." });
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
    return res.status(400).json({ errors: errs.array() });
  }

  const { id } = req.params;
  const { title, detail, repo, link } = req.body;

  try {
    if (req.file) {
      const { filename } = req.file;
      const project = await Project.findById(id);
      const imagePath = `./client/public/uploads/${project.image}`;

      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }

      const updatedProject = await Project.findByIdAndUpdate(
        id,
        {
          title,
          detail,
          repo,
          link,
          image: filename,
        },
        {
          new: true,
        }
      );

      return res.status(200).json(updatedProject);
    }

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      {
        title,
        detail,
        repo,
        link,
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
  get_projects,
  post_project,
  delete_project,
  put_project,
};
