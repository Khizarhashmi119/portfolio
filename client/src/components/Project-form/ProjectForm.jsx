import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import {
  addProjectAction,
  updateProjectAction,
} from "../../store/actions/projectsAction";

const ProjectForm = ({ history, type, project, addProject, updateProject }) => {
  const [inputs, setInputs] = useState({
    title: type === "Edit" ? project.title : "",
    detail: type === "Edit" ? project.detail : "",
    image: type === "Edit" ? project.image : "",
    repo: type === "Edit" ? project.repo : "",
    link: type === "Edit" ? project.link : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputs((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    type === "Edit" ? updateProject(project._id, inputs) : addProject(inputs);
    history.push("/projects"); //TODO: fix bug
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
        onChange={handleChange}
      />
      <label htmlFor="project-detail">Detail:</label>
      <textarea
        className="input-project-detail"
        id="project-detail"
        cols="30"
        rows="7"
        name="detail"
        value={inputs.detail}
        onChange={handleChange}
      ></textarea>
      <label htmlFor="project-image">Image URL:</label>
      <input
        className="input-project-image"
        type="url"
        id="project-image"
        name="image"
        value={inputs.image}
        onChange={handleChange}
      />
      <label htmlFor="project-repo">Github repo:</label>
      <input
        className="input-project-repo"
        type="url"
        id="project-repo"
        name="repo"
        value={inputs.repo}
        onChange={handleChange}
      />
      <label htmlFor="project-link">Project link:</label>
      <input
        className="input-project-link"
        type="url"
        id="project-link"
        name="link"
        value={inputs.link}
        onChange={handleChange}
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

export default connect(null, mapDispatchToProps)(withRouter(ProjectForm));
