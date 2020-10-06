import React, { useContext } from "react";

import { ProjectsContext } from "../../contexts/ProjectsContext";
import { AuthContext } from "../../contexts/AuthContext";
import ProjectForm from "../../components/Project-form/ProjectForm";

const UpdateProjectPage = ({ match }) => {
  const { projects, setProjects } = useContext(ProjectsContext);
  const { authState } = useContext(AuthContext);

  const project = projects.find(({ _id }) => match.params.id === _id);

  return (
    <section id="update-project">
      <div className="container">
        <h1>Edit project</h1>
        <ProjectForm
          type="Edit"
          project={project}
          setProjects={setProjects}
          authState={authState}
        />
      </div>
    </section>
  );
};

export default UpdateProjectPage;
