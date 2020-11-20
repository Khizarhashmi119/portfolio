import React from "react";

import Alert from "../../components/Alert/Alert";
import SkillForm from "../../components/SkillForm/SkillForm";
import DashboardSkillsList from "../../components/DashboardSkillsList/DashboardSkillsList";
import DashboardProjectsList from "../../components/DashboardProjectsList/DashboardProjectsList";

import "./DashboardPage.css";

const DashboardPage = ({ history }) => {
  const handleClick = () => {
    history.push("/add-project");
  };

  return (
    <main>
      <section id="dashboard">
        <div className="container">
          <Alert />
          <div className="dashboard-add-skill-form-container">
            <SkillForm />
          </div>
          <DashboardSkillsList />
          <hr className="horizontal-rule" />
          <div className="dashboard-add-project-btn-container">
            <button className="dashboard-add-project-btn" onClick={handleClick}>
              <i className="fas fa-plus"></i> Project
            </button>
          </div>
          <DashboardProjectsList />
        </div>
      </section>
    </main>
  );
};

export default DashboardPage;
