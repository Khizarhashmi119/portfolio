import React from "react";
import { connect } from "react-redux";

const ProjectDetailPage = ({ match, projects, loading }) => {
  const project = projects.find(({ _id }) => match.params.id === _id);

  return (
    <main>
      <section id="project-detail">
        {!loading ? (
          project ? (
            <div className="container">
              <h2 className="project-title">{project.title}</h2>
              <img className="project-img" src={project.image} alt="Project" />
              <div className="project-links">
                {project.repo && (
                  <a href={project.repo} className="project-link">
                    Github repo
                  </a>
                )}
                {project.link && (
                  <a href={project.link} className="project-link">
                    Project link
                  </a>
                )}
              </div>
              <p className="project-detail">{project.detail}</p>
            </div>
          ) : (
            <h2 className="loading-text">Loading...</h2>
          )
        ) : (
          <h2 className="loading-text">Loading...</h2>
        )}
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

export default connect(mapStateToProps)(ProjectDetailPage);
