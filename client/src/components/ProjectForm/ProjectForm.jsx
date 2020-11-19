import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import FileBase64 from "../FileBase64/FileBase64";

import {
  addProjectAction,
  updateProjectAction,
} from "../../store/actions/projectsActions";

import "./ProjectForm.css";

const ProjectForm = ({ type, project }) => {
  const [projectData, setProjectData] = useState({
    title: type === "Edit" ? project.title : "",
    detail: type === "Edit" ? project.detail : "",
    repo: type === "Edit" ? project.repo : "",
    link: type === "Edit" ? project.link : "",
    image: type === "Edit" ? project.image : "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProjectData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    type === "Edit"
      ? dispatch(updateProjectAction(project._id, projectData))
      : dispatch(addProjectAction(projectData));
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <label htmlFor="project-title">Title:</label>
      <input
        className="input-project-title"
        type="text"
        id="project-title"
        name="title"
        value={projectData.title}
        onChange={handleChange}
        required
      />
      <label htmlFor="project-detail">Detail:</label>
      <div className="input-project-detail">
        <CKEditor
          editor={ClassicEditor}
          onReady={(editor) => {
            editor.setData(projectData.detail);
          }}
          onChange={(e, editor) => {
            const data = editor.getData();
            setProjectData((prev) => {
              return {
                ...prev,
                detail: data,
              };
            });
          }}
        />
      </div>
      <label htmlFor="project-repo">Github repo:</label>
      <input
        className="input-project-repo"
        type="url"
        id="project-repo"
        name="repo"
        value={projectData.repo}
        onChange={handleChange}
      />
      <label htmlFor="project-link">Project link:</label>
      <input
        className="input-project-link"
        type="url"
        id="project-link"
        name="link"
        value={projectData.link}
        onChange={handleChange}
      />
      <label htmlFor="project-image">Image:</label>
      <FileBase64
        id="project-image"
        className="input-project-image"
        onDone={(fileDataURL) =>
          setProjectData({ ...projectData, image: fileDataURL })
        }
      />
      <button className="project-btn" type="submit">
        {type}
      </button>
    </form>
  );
};

export default ProjectForm;
