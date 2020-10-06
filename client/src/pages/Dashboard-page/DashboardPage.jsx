import React from "react";

import DashboardProjectList from "../../components/Dashboard-project-list/DashboardProjectList";

const DashboardPage = ({ history }) => {
  const handleClick = () => {
    history.push("/add-project");
  };

  return (
    <main>
      <section id="dashboard">
        <div className="container">
          <div className="dashboard-add-btn-container">
            <button className="dashboard-add-btn" onClick={handleClick}>
              <i className="fas fa-plus"></i> Project
            </button>
          </div>
          <DashboardProjectList />
        </div>
      </section>
    </main>
  );
};

export default DashboardPage;
