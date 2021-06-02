import axios from "axios";
import { v4 } from "uuid";

import * as projectsActionTypes from "../actionTypes/projectsActionTypes";
import * as alertsActionTypes from "../actionTypes/alertsActionTypes";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "/api/v1"
    : "http://localhost:5000/api/v1";

const getProjectsAction = () => async (dispatch) => {
  try {
    dispatch({ type: projectsActionTypes.GET_PROJECTS });
    const response = await axios.get(`${baseURL}/projects`);

    dispatch({
      type: projectsActionTypes.GET_PROJECTS_SUCCESS,
      projects: response.data,
    });
  } catch (err) {
    if (err.response) {
      const errors = err.response.data.errors;

      errors.length &&
        errors.forEach((error) => {
          const alertId = v4();

          dispatch({
            type: alertsActionTypes.ADD_ALERT,
            alert: { id: alertId, msg: error.msg, type: "error" },
          });

          setTimeout(
            () =>
              dispatch({
                type: alertsActionTypes.DELETE_ALERT,
                id: alertId,
              }),
            5000
          );
        });

      dispatch({
        type: projectsActionTypes.GET_PROJECTS_FAIL,
        errors,
      });
    } else if (err.request) {
      console.log(err.request);
    } else {
      console.log(err.message);
    }
  }
};

const getProjectAction = (projectId) => async (dispatch) => {
  try {
    dispatch({ type: projectsActionTypes.GET_PROJECT });
    const response = await axios.get(`${baseURL}/projects/${projectId}`);

    dispatch({
      type: projectsActionTypes.GET_PROJECT_SUCCESS,
      project: response.data,
    });
  } catch (err) {
    if (err.response) {
      const errors = err.response.data.errors;

      errors.length &&
        errors.forEach((error) => {
          const alertId = v4();

          dispatch({
            type: alertsActionTypes.ADD_ALERT,
            alert: { id: alertId, msg: error.msg, type: "error" },
          });

          setTimeout(
            () =>
              dispatch({
                type: alertsActionTypes.DELETE_ALERT,
                id: alertId,
              }),
            5000
          );
        });

      dispatch({
        type: projectsActionTypes.GET_PROJECT_FAIL,
        errors,
      });
    } else if (err.request) {
      console.log(err.request);
    } else {
      console.log(err.message);
    }
  }
};

const addProjectAction =
  ({ title, detail, tags, repo, link, image }) =>
  async (dispatch, getState) => {
    const {
      authState: { token },
    } = getState();

    try {
      dispatch({ type: projectsActionTypes.ADD_PROJECT });
      const project = new FormData();
      project.append("title", title);
      project.append("detail", detail);
      project.append("repo", repo);
      project.append("link", link);
      project.append("tags", tags);
      project.append("image", image);

      const response = await axios.post(`${baseURL}/projects/`, project, {
        headers: {
          "x-auth-token": token,
          "content-type": "multipart/form-data",
        },
      });

      dispatch({
        type: projectsActionTypes.ADD_PROJECT_SUCCESS,
        project: response.data,
      });

      const alertId = v4();

      dispatch({
        type: alertsActionTypes.ADD_ALERT,
        alert: {
          id: alertId,
          msg: "Project successfully added.",
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
      if (err.response) {
        const errors = err.response.data.errors;

        errors.length &&
          errors.forEach((error) => {
            const alertId = v4();

            dispatch({
              type: alertsActionTypes.ADD_ALERT,
              alert: { id: alertId, msg: error.msg, type: "error" },
            });

            setTimeout(
              () =>
                dispatch({
                  type: alertsActionTypes.DELETE_ALERT,
                  id: alertId,
                }),
              5000
            );
          });

        dispatch({
          type: projectsActionTypes.ADD_PROJECT_FAIL,
          errors,
        });
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log(err.message);
      }
    }
  };

const deleteProjectAction = (projectId) => async (dispatch, getState) => {
  const {
    authState: { token },
  } = getState();

  try {
    dispatch({ type: projectsActionTypes.DELETE_PROJECT });

    await axios.delete(`${baseURL}/projects/${projectId}`, {
      headers: {
        "x-auth-token": token,
      },
    });

    dispatch({
      type: projectsActionTypes.DELETE_PROJECT_SUCCESS,
      id: projectId,
    });

    const alertId = v4();

    dispatch({
      type: alertsActionTypes.ADD_ALERT,
      alert: {
        id: alertId,
        msg: "Project successfully deleted.",
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
    if (err.response) {
      const errors = err.response.data.errors;

      errors.length &&
        errors.forEach((error) => {
          const alertId = v4();

          dispatch({
            type: alertsActionTypes.ADD_ALERT,
            alert: { id: alertId, msg: error.msg, type: "error" },
          });

          setTimeout(
            () =>
              dispatch({
                type: alertsActionTypes.DELETE_ALERT,
                id: alertId,
              }),
            5000
          );
        });

      dispatch({
        type: projectsActionTypes.DELETE_PROJECT_FAIL,
        errors,
      });
    } else if (err.request) {
      console.log(err.request);
    } else {
      console.log(err.message);
    }
  }
};

const updateProjectAction =
  (projectId, { title, detail, tags, repo, link, image }) =>
  async (dispatch, getState) => {
    const {
      authState: { token },
    } = getState();

    try {
      dispatch({ type: projectsActionTypes.UPDATE_PROJECT });
      const project = new FormData();
      project.append("title", title);
      project.append("detail", detail);
      project.append("repo", repo);
      project.append("link", link);
      project.append("tags", tags);
      project.append("image", image);

      const response = await axios.put(
        `${baseURL}/projects/${projectId}`,
        project,
        {
          headers: {
            "x-auth-token": token,
            "content-type": "multipart/form-data",
          },
        }
      );

      dispatch({
        type: projectsActionTypes.UPDATE_PROJECT_SUCCESS,
        id: projectId,
        project: response.data,
      });

      const alertId = v4();

      dispatch({
        type: alertsActionTypes.ADD_ALERT,
        alert: {
          id: alertId,
          msg: "Project successfully updated.",
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
      if (err.response) {
        const errors = err.response.data.errors;

        errors.length &&
          errors.forEach((error) => {
            const alertId = v4();

            dispatch({
              type: alertsActionTypes.ADD_ALERT,
              alert: { id: alertId, msg: error.msg, type: "error" },
            });

            setTimeout(
              () =>
                dispatch({
                  type: alertsActionTypes.DELETE_ALERT,
                  id: alertId,
                }),
              5000
            );
          });

        dispatch({
          type: projectsActionTypes.UPDATE_PROJECT_FAIL,
          errors,
        });
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log(err.message);
      }
    }
  };

export {
  getProjectsAction,
  getProjectAction,
  addProjectAction,
  deleteProjectAction,
  updateProjectAction,
};
