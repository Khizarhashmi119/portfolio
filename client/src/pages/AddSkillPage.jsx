import React from "react";

import Alert from "../components/Alert";
import SkillForm from "../components/SkillForm";

const AddSkillPage = () => {
  return (
    <section id="add-skill">
      <div className="container">
        <h1>Add Skill</h1>
        <Alert />
        <SkillForm type="Add" />
      </div>
    </section>
  );
};

export default AddSkillPage;
