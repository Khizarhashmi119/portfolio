import React from "react";
import { useSelector } from "react-redux";

import ProjectsList from "../../components/ProjectsList/ProjectsList";

import "./ProjectsPage.css";

const ProjectsPage = () => {
  const { projects, loading } = useSelector((state) => state.projectsState);

  return (
    <main>
      <section id="projects">
        <div className="container">
          <h2 className="projects-title">My projects</h2>
          {!loading ? (
            projects.length !== 0 ? (
              <ProjectsList projects={projects} />
            ) : (
              <h3 className="message">No project yet.</h3>
            )
          ) : (
            <h2 className="loading-text">Loading...</h2>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
