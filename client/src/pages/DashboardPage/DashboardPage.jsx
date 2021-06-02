import React from "react";
import { useHistory } from "react-router";

import Alerts from "../../components/Alerts/Alerts";
import SkillForm from "../../components/SkillForm/SkillForm";
import DashboardSkillsList from "../../components/DashboardSkillsList/DashboardSkillsList";
import DashboardProjectsList from "../../components/DashboardProjectsList/DashboardProjectsList";

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
          <Alerts />
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
