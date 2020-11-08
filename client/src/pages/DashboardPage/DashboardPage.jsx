import React from "react";

import Alert from "../../components/Alert/Alert";
import DashboardSkillsList from "../../components/DashboardSkillsList/DashboardSkillsList";
import DashboardProjectsList from "../../components/DashboardProjectsList/DashboardProjectsList";

import "./DashboardPage.scss";

const DashboardPage = ({ history }) => {
  const handleClick1 = () => {
    history.push("/add-project");
  };

  const handleClick2 = () => {
    history.push("./add-skill");
  };

  return (
    <main>
      <section id="dashboard">
        <div className="container">
          <Alert />
          <div className="dashboard-add-skill-btn-container">
            <button className="dashboard-add-skill-btn" onClick={handleClick2}>
              <i className="fas fa-plus"></i> Skill
            </button>
          </div>
          <DashboardSkillsList />
          <hr className="horizontal-rule" />
          <div className="dashboard-add-project-btn-container">
            <button
              className="dashboard-add-project-btn"
              onClick={handleClick1}
            >
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
