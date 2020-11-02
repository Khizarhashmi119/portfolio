import axios from "axios";
import { v4 } from "uuid";

const getProjectsAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_PROJECTS" });
      const response = await axios.get("/api/projects");
      dispatch({ type: "GET_PROJECTS_SUCCESS", payload: response.data });
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors && errors.length > 0) {
        errors.forEach((error) => {
          const alertId = v4();
          dispatch({
            type: "ADD_ALERT",
            payload: { id: alertId, msg: error.msg, type: "error" },
          });

          setTimeout(
            () => dispatch({ type: "DELETE_ALERT", payload: alertId }),
            5000
          );
        });
      }

      dispatch({ type: "GET_PROJECTS_FAIL", payload: errors || err });
    }
  };
};

const addProjectAction = (project) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "ADD_PROJECT" });

      const response = await axios.post("/api/projects/create", project, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });

      dispatch({ type: "ADD_PROJECT_SUCCESS", payload: response.data });
      const alertId = v4();

      dispatch({
        type: "ADD_ALERT",
        payload: {
          id: alertId,
          msg: "Project added.",
          type: "success",
        },
      });

      setTimeout(
        () => dispatch({ type: "DELETE_ALERT", payload: alertId }),
        5000
      );
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors && errors.length > 0) {
        errors.forEach((error) => {
          const alertId = v4();
          dispatch({
            type: "ADD_ALERT",
            payload: { id: alertId, msg: error.msg, type: "error" },
          });

          setTimeout(
            () => dispatch({ type: "DELETE_ALERT", payload: alertId }),
            5000
          );
        });
      }

      dispatch({ type: "ADD_PROJECT_FAIL", payload: errors || err });
    }
  };
};

const deleteProjectAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "DELETE_PROJECT" });

      await axios.delete(`/api/projects/${id}`, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });

      dispatch({ type: "DELETE_PROJECT_SUCCESS", payload: id });
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors && errors.length > 0) {
        errors.forEach((error) => {
          const alertId = v4();
          dispatch({
            type: "ADD_ALERT",
            payload: { id: alertId, msg: error.msg, type: "error" },
          });

          setTimeout(
            () =>
              dispatch({
                type: "DELETE_ALERT",
                payload: alertId,
              }),
            5000
          );
        });
      }

      dispatch({ type: "DELETE_PROJECT_FAIL", payload: errors || err });
    }
  };
};

const updateProjectAction = (id, project) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "UPDATE_PROJECT" });

      const response = await axios.put(`/api/projects/${id}`, project, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });

      dispatch({ type: "UPDATE_PROJECT_SUCCESS", payload: response.data });
      const alertId = v4();

      dispatch({
        type: "ADD_ALERT",
        payload: {
          id: alertId,
          msg: "Project updated.",
          type: "success",
        },
      });

      setTimeout(
        () => dispatch({ type: "DELETE_ALERT", payload: alertId }),
        5000
      );
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors && errors.length > 0) {
        errors.forEach((error) => {
          const alertId = v4();
          dispatch({
            type: "ADD_ALERT",
            payload: { id: alertId, msg: error.msg, type: "error" },
          });

          setTimeout(
            () => dispatch({ type: "DELETE_ALERT", payload: alertId }),
            5000
          );
        });
      }

      dispatch({ type: "UPDATE_PROJECT_FAIL", payload: errors || err });
    }
  };
};

export {
  getProjectsAction,
  addProjectAction,
  deleteProjectAction,
  updateProjectAction,
};
