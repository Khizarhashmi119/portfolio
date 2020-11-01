import React from "react";
import { useSelector } from "react-redux";
import Moment from "react-moment";

const ProjectDetailPage = ({ match }) => {
  const { projects, loading } = useSelector((state) => state.projectsState);
  const project = projects.find(({ _id }) => match.params.id === _id);

  return (
    <main>
      <section id="project-detail">
        {!loading ? (
          project ? (
            <div className="container">
              <img
                className="project-img"
                src={`/uploads/${project.image}`}
                alt="Project"
              />
              <h2 className="project-title">{project.title}</h2>
              <div className="project-links">
                {project.repo && (
                  <a href={project.repo} className="project-link">
                    Github repo
                  </a>
                )}
                {project.link && (
                  <a href={project.link} className="project-link">
                    Project link
                  </a>
                )}
              </div>
              <p className="project-detail">{project.detail}</p>
              <div className="project-date">
                Date:{" "}
                <Moment
                  date={project.updatedAt}
                  format="MMMM Do YYYY, h:mm:ss a"
                />
              </div>
            </div>
          ) : (
            <h2 className="loading-text">Loading...</h2>
          )
        ) : (
          <h2 className="loading-text">Loading...</h2>
        )}
      </section>
    </main>
  );
};

export default ProjectDetailPage;
