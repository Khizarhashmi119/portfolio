import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { v4 } from "uuid";

import SkillsList from "../../components/SkillsList/SkillsList";
import ProjectPreviewsList from "../../components/ProjectPreviewsList/ProjectPreviewsList";
import Alerts from "../../components/Alerts/Alerts";
import changeTheme from "../../utils/changeTheme";
import * as alertsActionTypes from "../../redux/actionTypes/alertsActionTypes";

import "./HomePage.css";

const HomePage = () => {
  const [contactData, setContactData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const { projects, isLoading } = useSelector((state) => state.projectsState);
  const dispatch = useDispatch();
  const { name, email, subject, message } = contactData;

  const handleClick = (e) => {
    const { theme } = e.target.dataset;
    changeTheme(theme);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    const baseURL =
      process.env.NODE_ENV === "production"
        ? "/api/v1"
        : "http://localhost:5000/api/v1";
    const alertId = v4();

    e.preventDefault();

    try {
      const response = await axios.post(`${baseURL}/contact`, {
        name,
        email,
        subject,
        message,
      });

      setContactData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      dispatch({
        type: alertsActionTypes.ADD_ALERT,
        alert: {
          id: alertId,
          msg: response.data.msg,
          type: "success",
        },
      });

      setTimeout(
        () =>
          dispatch({
            type: alertsActionTypes.DELETE_ALERT,
            id: alertId,
          }),
        5000
      );
    } catch (err) {
      const alertId = v4();

      dispatch({
        type: alertsActionTypes.ADD_ALERT,
        alert: {
          id: alertId,
          msg: "Internal server error",
          type: "error",
        },
      });

      setTimeout(
        () =>
          dispatch({
            type: alertsActionTypes.DELETE_ALERT,
            id: alertId,
          }),
        5000
      );
    }
  };

  return (
    <main>
      <section id="title">
        <div className="container">
          <div className="terminal">
            <div className="terminal-top">
              <div className="dot-1"></div>
              <div className="dot-2"></div>
              <div className="dot-3"></div>
            </div>
            <div className="terminal-bottom">
              <h2 className="title">
                Hi, I'm <span className="name">Khizar</span>.
              </h2>
              <p className="sub-title">A full stack web developer.</p>
              <div className="theme-dots">
                <div
                  className="theme-dot-1"
                  data-theme="white"
                  onClick={handleClick}
                ></div>
                <div
                  className="theme-dot-2"
                  data-theme="blue"
                  onClick={handleClick}
                ></div>
              </div>
              <p className="setting-note">
                <i>*theme setting will be save for your next visit.</i>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="container">
          <h2 className="about-title">More about me</h2>
          <p className="about-me">
            I'm a full-stack web developer lives in Delhi, India.
            <br />I make web applications usually with React and Node.js.
            <br />
            Feel free to take a look at my projects.
          </p>
          <div className="social-links">
            <a
              className="social-link"
              href="https://github.com/Khizarhashmi119"
            >
              <i className="fab fa-github-alt fa-2x"></i>
            </a>
            <a
              className="social-link"
              href="https://www.linkedin.com/in/khizarhashmi119/"
            >
              <i className="fab fa-linkedin-in fa-2x"></i>
            </a>
            <a
              className="social-link"
              href="https://twitter.com/khizarhashmi119"
            >
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </div>
          <hr className="horizontal-rule" />
          <h3 className="skills-title">Top Expertise</h3>
          <SkillsList />
        </div>
      </section>
      <section id="projects-preview">
        <div className="container">
          <h2 className="projects-preview-title">Some of my past projects.</h2>
          {!isLoading ? (
            projects.length !== 0 ? (
              <Fragment>
                <ProjectPreviewsList projects={projects.slice(0, 2)} />
                <div className="projects-page-link">
                  <Link to="/projects">More projects</Link>
                </div>
              </Fragment>
            ) : (
              <h2 className="message">No project yet.</h2>
            )
          ) : (
            <h3 className="loading-text">Loading...</h3>
          )}
        </div>
      </section>
      <section id="contact">
        <div className="container">
          <h2 className="contact-title">Contact me</h2>
          <Alerts />
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              className="contact-input-name"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              className="contact-input-email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
            <label htmlFor="subject">Subject:</label>
            <input
              id="subject"
              className="contact-input-subject"
              type="text"
              name="subject"
              value={subject}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              className="contact-message"
              name="message"
              value={message}
              cols="30"
              rows="7"
              onChange={handleChange}
              required
            ></textarea>
            <button className="contact-btn" type="submit">
              Send
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
