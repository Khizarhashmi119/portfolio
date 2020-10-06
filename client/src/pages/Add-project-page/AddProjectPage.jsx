import React, { useContext } from "react";

import { ProjectsContext } from "../../contexts/ProjectsContext";
import { AuthContext } from "../../contexts/AuthContext";
import ProjectForm from "../../components/Project-form/ProjectForm";

const AddProjectPage = () => {
  const { setProjects } = useContext(ProjectsContext);
  const { authState } = useContext(AuthContext);

  return (
    <section id="add-project">
      <div className="container">
        <h1>Add project</h1>
        <ProjectForm
          type="Add"
          setProjects={setProjects}
          authState={authState}
        />
      </div>
    </section>
  );
};

export default AddProjectPage;
