import React from "react";

import ProjectForm from "../../components/ProjectForm/ProjectForm";
import Alert from "../../components/Alert/Alert";

import "./AddProjectPage.scss";

const AddProjectPage = () => {
  return (
    <section id="add-project">
      <div className="container">
        <h1 className="add-project-title">Add project</h1>
        <Alert />
        <ProjectForm type="Add" />
      </div>
    </section>
  );
};

export default AddProjectPage;
