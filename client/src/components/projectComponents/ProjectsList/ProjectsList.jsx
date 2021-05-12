import React from "react";

import Project from "../Project/Project";

import "./ProjectsList.css";

const ProjectsList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <Project key={project._id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
