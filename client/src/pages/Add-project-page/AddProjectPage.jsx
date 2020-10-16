import React from "react";

import ProjectForm from "../../components/Project-form/ProjectForm";
import Alert from "../../components/Alert/Alert";

const AddProjectPage = () => {
  return (
    <section id="add-project">
      <div className="container">
        <h1>Add project</h1>
        <Alert />
        <ProjectForm type="Add" />
      </div>
    </section>
  );
};

export default AddProjectPage;
