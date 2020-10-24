import React, { useState } from "react";
import { connect } from "react-redux";

import {
  addProjectAction,
  updateProjectAction,
} from "../store/actions/projectsActions";

const ProjectForm = ({ type, project, addProject, updateProject }) => {
  const [inputs, setInputs] = useState({
    title: type === "Edit" ? project.title : "",
    detail: type === "Edit" ? project.detail : "",
    repo: type === "Edit" ? project.repo : "",
    link: type === "Edit" ? project.link : "",
  });
  const [file, setFile] = useState(null);

  const handleChange1 = (e) => {
    const { name, value } = e.target;

    setInputs((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleChange2 = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("title", inputs.title);
    fd.append("detail", inputs.detail);
    fd.append("repo", inputs.repo);
    fd.append("link", inputs.link);
    fd.append("image", file);
    type === "Edit" ? updateProject(project._id, fd) : addProject(fd);
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <label htmlFor="project-title">Title:</label>
      <input
        className="input-project-title"
        type="text"
        id="project-title"
        name="title"
        value={inputs.title}
        onChange={handleChange1}
      />
      <label htmlFor="project-detail">Detail:</label>
      <textarea
        className="input-project-detail"
        id="project-detail"
        cols="30"
        rows="7"
        name="detail"
        value={inputs.detail}
        onChange={handleChange1}
      ></textarea>
      <label htmlFor="project-repo">Github repo:</label>
      <input
        className="input-project-repo"
        type="url"
        id="project-repo"
        name="repo"
        value={inputs.repo}
        onChange={handleChange1}
      />
      <label htmlFor="project-link">Project link:</label>
      <input
        className="input-project-link"
        type="url"
        id="project-link"
        name="link"
        value={inputs.link}
        onChange={handleChange1}
      />
      <label htmlFor="project-image">Image:</label>
      <input
        className="input-project-image"
        type="file"
        id="project-image"
        name="image"
        onChange={handleChange2}
      />
      <button className="project-btn" type="submit">
        {type}
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProject: (project) => {
      dispatch(addProjectAction(project));
    },
    updateProject: (id, project) => {
      dispatch(updateProjectAction(id, project));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProjectForm);
