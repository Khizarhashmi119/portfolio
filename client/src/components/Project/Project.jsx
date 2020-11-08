import React from "react";
import { withRouter } from "react-router-dom";

import "./Project.scss";

const Project = ({ history, id, title, detail, image }) => {
  return (
    <div
      className="project-preview"
      onClick={() => history.push(`/projects/${id}`)}
    >
      <img className="project-preview-img" src={image} alt="Project" />
      <h3 className="project-preview-title">{title}</h3>
      <p className="project-preview-detail">{detail.slice(0, 100)}</p>
    </div>
  );
};

export default withRouter(Project);