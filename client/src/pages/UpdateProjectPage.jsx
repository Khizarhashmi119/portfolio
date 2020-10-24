import React from "react";
import { connect } from "react-redux";

import ProjectForm from "../components/ProjectForm";
import Alert from "../components/Alert";

const UpdateProjectPage = ({ match, projects, loading }) => {
  const project = projects.find(({ _id }) => match.params.id === _id);

  return (
    <section id="update-project">
      <div className="container">
        <h1>Edit project</h1>
        <Alert />
        {!loading ? (
          project ? (
            <ProjectForm type="Edit" project={project} />
          ) : (
            <h2 className="loading-text">Loading...</h2>
          )
        ) : (
          <h2 className="loading-text">Loading...</h2>
        )}
      </div>
    </section>
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

export default connect(mapStateToProps)(UpdateProjectPage);
