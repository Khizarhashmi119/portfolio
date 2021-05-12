import React from "react";
import { useHistory } from "react-router-dom";
import TagsList from "../../layoutComponents/TagsList/TagsList";

import "./Project.css";

const Project = ({ project }) => {
  const { push } = useHistory();

  return (
    <div
      className="project-preview"
      onClick={() => push(`/projects/${project._id}`)}
    >
      <img className="project-preview-img" src={project.image} alt="Project" />
      <h3 className="project-preview-title">{project.title}</h3>
      <TagsList tags={project.tags.slice(0, 9)} />
    </div>
  );
};

export default Project;
