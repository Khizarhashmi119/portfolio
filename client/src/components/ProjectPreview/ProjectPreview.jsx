import React from "react";
import { useHistory } from "react-router-dom";

import "./ProjectPreview.css";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "/api/v1"
    : "http://localhost:5000/api/v1";

const ProjectPreview = ({ project }) => {
  const { push } = useHistory();

  return (
    <div
      className="project-preview"
      onClick={() => push(`/projects/${project._id}`)}
    >
      <img
        className="project-preview-img"
        src={`${baseURL}/${project.image}`}
        alt="Project"
      />
      <h3 className="project-preview-title">{project.title}</h3>
    </div>
  );
};

export default ProjectPreview;
