import React from "react";
import { useHistory } from "react-router";

import Alert from "../../components/layoutComponents/Alert/Alert";
import SkillForm from "../../components/skillComponents/SkillForm/SkillForm";
import DashboardSkillsList from "../../components/dashboardComponents/DashboardSkillsList/DashboardSkillsList";
import DashboardProjectsList from "../../components/dashboardComponents/DashboardProjectsList/DashboardProjectsList";

import "./DashboardPage.css";

const DashboardPage = () => {
  const { push } = useHistory();

  const handleClick = () => {
    push("/add-project");
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
