import React from "react";

import Alert from "../../components/Alert/Alert";
import SkillForm from "../../components/SkillForm/SkillForm";

import "./AddSkillPage.scss";

const AddSkillPage = () => {
  return (
    <section id="add-skill">
      <div className="container">
        <h1 className="add-skill-title">Add Skill</h1>
        <Alert />
        <SkillForm type="Add" />
      </div>
    </section>
  );
};

export default AddSkillPage;
