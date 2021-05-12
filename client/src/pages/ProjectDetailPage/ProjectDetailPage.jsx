import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Moment from "react-moment";

import { getProjectAction } from "../../redux/actions/projectsActions";

import "./ProjectDetailPage.css";
import TagsList from "../../components/layoutComponents/TagsList/TagsList";

const ProjectDetailPage = () => {
  const { project, isLoading } = useSelector((state) => state.projectsState);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProjectAction(id));
  }, [dispatch, id]);

  return (
    <main>
      <section id="project-detail-page">
        <div className="container">
          {!isLoading ? (
            project ? (
              <Fragment>
                <div className="project-links">
                  {project.repo && (
                    <a href={project.repo} className="project-link">
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} className="project-link">
                      <i className="fas fa-external-link-square-alt"></i>
                    </a>
                  )}
                </div>
                <img
                  className="project-img"
                  src={`/uploads/${project.image}`}
                  alt="Project"
                />
                <h2 className="project-title">{project.title}</h2>
                <TagsList tags={project.tags} />
                <div
                  className="project-detail"
                  dangerouslySetInnerHTML={{
                    __html: project.detail,
                  }}
                ></div>
                <div className="project-date">
                  Date:{" "}
                  <Moment
                    date={project.updatedAt}
                    format="MMMM Do YYYY, h:mm:ss a"
                  />
                </div>
              </Fragment>
            ) : (
              <h2 className="loading-text">Loading...</h2>
            )
          ) : (
            <h2 className="loading-text">Loading...</h2>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProjectDetailPage;
