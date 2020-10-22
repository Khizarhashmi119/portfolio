import React from "react";

import ProjectForm from "../components/ProjectForm";
import Alert from "../components/Alert";

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
