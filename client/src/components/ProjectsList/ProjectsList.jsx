import React from "react";

import Project from "../Project/Project";

import "./ProjectsList.scss";

const ProjectsList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map(({ _id, ...otherProps }) => (
        <Project key={_id} id={_id} {...otherProps} />
      ))}
    </div>
  );
};

export default ProjectsList;
