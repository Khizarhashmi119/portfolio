import React from "react";

import ProjectForm from "../../components/projectComponents/ProjectForm/ProjectForm";
import Alert from "../../components/layoutComponents/Alert/Alert";

import "./AddProjectPage.css";

const AddProjectPage = () => {
  return (
    <section id="add-project">
      <div className="container">
        <h1 className="add-project-title">Add project</h1>
        <Alert />
        <ProjectForm type="add" />
      </div>
    </section>
  );
};

export default AddProjectPage;
