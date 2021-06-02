import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Editor } from "@tinymce/tinymce-react";

import {
  addProjectAction,
  updateProjectAction,
} from "../../redux/actions/projectsActions";

import "./ProjectForm.css";

const ProjectForm = ({ type, project }) => {
  const [projectFormData, setProjectFormData] = useState({
    title: type === "update" ? project.title : "",
    detail: type === "update" ? project.detail : "",
    tags: type === "update" ? project.tags.join(",") : "",
    repo: type === "update" ? project.repo : "",
    link: type === "update" ? project.link : "",
    image: null,
  });
  const { isLoading } = useSelector((state) => state.projectsState);
  const dispatch = useDispatch();
  const { title, detail, tags, repo, link } = projectFormData;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProjectFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const editorhandleChange = (content, editor) => {
    setProjectFormData((prev) => {
      return {
        ...prev,
        detail: content,
      };
    });
  };

  const fileInputHandleChange = (e) => {
    setProjectFormData((prevState) => ({
      ...prevState,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    type === "update"
      ? dispatch(updateProjectAction(project._id, projectFormData))
      : dispatch(addProjectAction(projectFormData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="add-project-btn-container">
        <small>* Required fields</small>
        <button className="project-btn" type="submit">
          {!isLoading ? type : "Loading..."}
        </button>
      </div>
      <div className="project-input-container">
        <input
          id="project-title"
          className="input-project-title"
          type="text"
          name="title"
          value={title}
          placeholder="Title*"
          onChange={handleChange}
          required
        />
        <input
          id="project-tags"
          className="input-project-tags"
          type="text"
          name="tags"
          value={tags}
          placeholder="Tags"
          onChange={handleChange}
          required
        />
        <input
          id="project-repo"
          className="input-project-repo"
          type="url"
          name="repo"
          value={repo}
          placeholder="Repo link"
          onChange={handleChange}
        />
        <input
          id="project-link"
          className="input-project-link"
          type="url"
          name="link"
          value={link}
          placeholder="Project link"
          onChange={handleChange}
        />
      </div>
      <Editor
        apiKey="ikkh91gpnwr70kvztwr6pn7w7xiaqkz47ls6z7ajhio3t7jz"
        init={{
          content_css: "dark",
          skin: "oxide-dark",
          height: 300,
          menubar: true,
          plugins: `advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste help wordcount codesample image`,
          toolbar: `undo redo | formatselect | bold italic backcolor | codesample image media | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | "removeformat | preview | help`,
        }}
        value={detail}
        onEditorChange={editorhandleChange}
      />
      <div className="file-input-container">
        <input
          id="project-image"
          className="input-project-image"
          type="file"
          onChange={fileInputHandleChange}
        />
      </div>
    </form>
  );
};

export default ProjectForm;
