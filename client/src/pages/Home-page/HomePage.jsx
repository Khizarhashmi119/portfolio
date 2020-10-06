import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";

import { ProjectsContext } from "../../contexts/ProjectsContext";
import SkillList from "../../components/SkillList/SkillList";
import ProjectList from "../../components/Project-list/ProjectList";

const HomePage = ({ changeTheme }) => {
  const { projects } = useContext(ProjectsContext);
  const [inputs, setInputs] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleClick = (e) => {
    const { theme } = e.target.dataset;
    changeTheme(theme);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
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
                <div
                  className="theme-dot-3"
                  data-theme="dark"
                  onClick={handleClick}
                ></div>
              </div>
              <p className="setting-note">
                *theme setting will be save for your next visit.
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
            <br />I make web applications usually with Node.js and Express.js.
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
          <hr />
          <h3 className="skills-title">Top Expertise</h3>
          <SkillList />
        </div>
      </section>

      <section id="projects-preview">
        <div className="container">
          <h2 className="projects-preview-title">Some of my past projects.</h2>
          {projects.length !== 0 ? (
            <Fragment>
              <ProjectList projects={projects.slice(0, 3)} />
              <Link className="projects-link" to="/projects">
                More projects
              </Link>
            </Fragment>
          ) : (
            <h3 className="message">No project yet.</h3>
          )}
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2 className="contact-title">Contact me</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              className="contact-input-name"
              type="text"
              name="name"
              id="name"
              required
              onChange={handleChange}
            />
            <label htmlFor="subject">Subject:</label>
            <input
              className="contact-input-subject"
              type="text"
              name="subject"
              id="subject"
              required
              onChange={handleChange}
            />
            <label htmlFor="email">Email:</label>
            <input
              className="contact-input-email"
              type="email"
              name="email"
              id="email"
              required
              onChange={handleChange}
            />
            <label htmlFor="message">Message:</label>
            <textarea
              className="contact-message"
              name="message"
              id="message"
              cols="30"
              rows="7"
              required
              onChange={handleChange}
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
