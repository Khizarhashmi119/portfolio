import React from "react";

import ProjectPreview from "../ProjectPreview/ProjectPreview";

import "./ProjectPreviewsList.css";

const ProjectPreviewsList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectPreview key={project._id} project={project} />
      ))}
    </div>
  );
};

export default ProjectPreviewsList;
