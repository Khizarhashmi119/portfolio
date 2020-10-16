import React, { Fragment } from "react";
import { connect } from "react-redux";

import ProjectForm from "../../components/Project-form/ProjectForm";
import Alert from "../../components/Alert/Alert";

const UpdateProjectPage = ({ match, projects, loading }) => {
  const project = projects.find(({ _id }) => match.params.id === _id);

  return (
    <section id="update-project">
      <div className="container">
        <h1>Edit project</h1>
        {!loading ? (
          project ? (
            <Fragment>
              <Alert />
              <ProjectForm type="Edit" project={project} />
            </Fragment>
          ) : (
            <h2>Loading...</h2>
          )
        ) : (
          <h2>Loading...</h2>
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
