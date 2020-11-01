import React from "react";
import { useSelector } from "react-redux";

import ProjectForm from "../components/ProjectForm";
import Alert from "../components/Alert";

const UpdateProjectPage = ({ match }) => {
  const { projects, loading } = useSelector((state) => state.projectsState);
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

export default UpdateProjectPage;
