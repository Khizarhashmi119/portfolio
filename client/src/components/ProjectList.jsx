import React from "react";

import Project from "./Project";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map(({ _id, ...otherProps }) => (
        <Project key={_id} id={_id} {...otherProps} />
      ))}
    </div>
  );
};

export default ProjectList;
