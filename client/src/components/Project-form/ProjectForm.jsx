import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

const ProjectForm = ({ history, setProjects, authState, type, project }) => {
  const [inputs, setInputs] = useState({
    title: type === "Edit" ? project.title : "",
    detail: type === "Edit" ? project.detail : "",
    image: type === "Edit" ? project.image : "",
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

    axios({
      method: type === "Edit" ? "put" : "post",
      url:
        type === "Edit"
          ? `/api/projects/${project._id}`
          : `/api/projects/create`,
      data: {
        ...inputs,
      },
      headers: {
        "x-auth-token": authState.token,
      },
    }).then((res) => {
      if (res.status === 200) {
        setProjects(res.data);
        history.push("/dashboard");
      }
    });
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
      <button className="project-btn" type="submit">
        {type}
      </button>
    </form>
  );
};

export default withRouter(ProjectForm);
