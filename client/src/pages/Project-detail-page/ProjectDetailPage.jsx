import React, { useContext } from "react";

import { ProjectsContext } from "../../contexts/ProjectsContext";

const ProjectDetailPage = ({ match }) => {
  const { projects } = useContext(ProjectsContext);

  const project = projects.find(({ _id }) => match.params.id === _id);

  return (
    <main>
      <section id="project-detail">
        <div className="container">
          <h2 className="project-title">{project.title}</h2>
          <img className="project-img" src={project.image} alt="Project" />
          <p className="project-detail">{project.detail}</p>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetailPage;
