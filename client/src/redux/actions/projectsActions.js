import axios from "axios";
import { v4 } from "uuid";

import {
  GET_PROJECTS,
  GET_PROJECT,
  ADD_PROJECT,
  DELETE_PROJECT,
  UPDATE_PROJECT,
  GET_PROJECTS_SUCCESS,
  GET_PROJECT_SUCCESS,
  ADD_PROJECT_SUCCESS,
  DELETE_PROJECT_SUCCESS,
  UPDATE_PROJECT_SUCCESS,
  GET_PROJECTS_FAIL,
  GET_PROJECT_FAIL,
  ADD_PROJECT_FAIL,
  DELETE_PROJECT_FAIL,
  UPDATE_PROJECT_FAIL,
} from "../actionTypes/projectsActionTypes";
import { ADD_ALERT, DELETE_ALERT } from "../actionTypes/alertsActionTypes";

const getProjectsAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PROJECTS });
    const response = await axios.get("/api/projects");
    dispatch({ type: GET_PROJECTS_SUCCESS, payload: response.data });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors && errors.length > 0) {
      errors.forEach((error) => {
        const alertId = v4();
        dispatch({
          type: ADD_ALERT,
          payload: { id: alertId, msg: error.msg, type: "error" },
        });

        setTimeout(
          () => dispatch({ type: DELETE_ALERT, payload: alertId }),
          5000
        );
      });
    }

    dispatch({ type: GET_PROJECTS_FAIL, payload: errors || err });
  }
};

const getProjectAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_PROJECT });
    const response = await axios.get(`/api/projects/${id}`);
    dispatch({ type: GET_PROJECT_SUCCESS, payload: response.data });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors && errors.length > 0) {
      errors.forEach((error) => {
        const alertId = v4();
        dispatch({
          type: ADD_ALERT,
          payload: { id: alertId, msg: error.msg, type: "error" },
        });

        setTimeout(
          () => dispatch({ type: DELETE_ALERT, payload: alertId }),
          5000
        );
      });
    }

    dispatch({ type: GET_PROJECT_FAIL, payload: errors || err });
  }
};

const addProjectAction = (project) => async (dispatch) => {
  try {
    dispatch({ type: ADD_PROJECT });

    const response = await axios.post("/api/projects/", project, {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    });

    dispatch({ type: ADD_PROJECT_SUCCESS, payload: response.data });
    const alertId = v4();

    dispatch({
      type: ADD_ALERT,
      payload: {
        id: alertId,
        msg: "Project added.",
        type: "success",
      },
    });

    setTimeout(() => dispatch({ type: DELETE_ALERT, payload: alertId }), 5000);
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors && errors.length > 0) {
      errors.forEach((error) => {
        const alertId = v4();
        dispatch({
          type: ADD_ALERT,
          payload: { id: alertId, msg: error.msg, type: "error" },
        });

        setTimeout(
          () => dispatch({ type: DELETE_ALERT, payload: alertId }),
          5000
        );
      });
    }

    dispatch({ type: ADD_PROJECT_FAIL, payload: errors || err });
  }
};

const deleteProjectAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PROJECT });

    await axios.delete(`/api/projects/${id}`, {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    });

    dispatch({ type: DELETE_PROJECT_SUCCESS, payload: id });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors && errors.length > 0) {
      errors.forEach((error) => {
        const alertId = v4();
        dispatch({
          type: ADD_ALERT,
          payload: { id: alertId, msg: error.msg, type: "error" },
        });

        setTimeout(
          () =>
            dispatch({
              type: DELETE_ALERT,
              payload: alertId,
            }),
          5000
        );
      });
    }

    dispatch({ type: DELETE_PROJECT_FAIL, payload: errors || err });
  }
};

const updateProjectAction = (id, project) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROJECT });

    const response = await axios.put(`/api/projects/${id}`, project, {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    });

    dispatch({
      type: UPDATE_PROJECT_SUCCESS,
      payload: { id, project: response.data },
    });
    const alertId = v4();

    dispatch({
      type: ADD_ALERT,
      payload: {
        id: alertId,
        msg: "Project updated.",
        type: "success",
      },
    });

    setTimeout(() => dispatch({ type: DELETE_ALERT, payload: alertId }), 5000);
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors && errors.length > 0) {
      errors.forEach((error) => {
        const alertId = v4();
        dispatch({
          type: ADD_ALERT,
          payload: { id: alertId, msg: error.msg, type: "error" },
        });

        setTimeout(
          () => dispatch({ type: DELETE_ALERT, payload: alertId }),
          5000
        );
      });
    }

    dispatch({ type: UPDATE_PROJECT_FAIL, payload: errors || err });
  }
};

export {
  getProjectsAction,
  getProjectAction,
  addProjectAction,
  deleteProjectAction,
  updateProjectAction,
};
