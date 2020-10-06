import React, { useContext } from "react";

import { ProjectsContext } from "../../contexts/ProjectsContext";
import ProjectList from "../../components/Project-list/ProjectList";

const ProjectsPage = () => {
  const { projects } = useContext(ProjectsContext);

  return (
    <main>
      <section id="projects">
        <div className="container">
          <h2 className="projects-title">My projects</h2>
          {projects.length !== 0 ? (
            <ProjectList projects={projects} />
          ) : (
            <h3 className="message">No project yet.</h3>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
