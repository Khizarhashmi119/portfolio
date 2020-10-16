import React from "react";
import { connect } from "react-redux";

import ProjectList from "../../components/Project-list/ProjectList";

const ProjectsPage = ({ projects, loading }) => {
  // console.log(projects);
  // console.log(loading);

  return (
    <main>
      <section id="projects">
        <div className="container">
          <h2 className="projects-title">My projects</h2>
          {!loading ? (
            projects.length !== 0 ? (
              <ProjectList projects={projects} />
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

const mapStateToProps = (state) => {
  const {
    projectsState: { projects, loading },
  } = state;

  return {
    projects,
    loading,
  };
};

export default connect(mapStateToProps)(ProjectsPage);
