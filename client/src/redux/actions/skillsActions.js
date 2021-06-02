import axios from "axios";
import { v4 } from "uuid";

import * as skillsActionTypes from "../actionTypes/skillsActionTypes";
import * as alertsActionTypes from "../actionTypes/alertsActionTypes";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "/api/v1"
    : "http://localhost:5000/api/v1";

const getSkillsAction = () => async (dispatch) => {
  try {
    dispatch({ type: skillsActionTypes.GET_SKILLS });
    const response = await axios.get(`${baseURL}/skills/`);

    dispatch({
      type: skillsActionTypes.GET_SKILLS_SUCCESS,
      skills: response.data,
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
        type: skillsActionTypes.GET_SKILLS_FAIL,
        errors,
      });
    } else if (err.request) {
      console.log(err.request);
    } else {
      console.log(err.message);
    }
  }
};

const addSkillAction = (skill) => async (dispatch, getState) => {
  const {
    authState: { token },
  } = getState();

  try {
    dispatch({ type: skillsActionTypes.ADD_SKILL });

    const response = await axios.post(
      `${baseURL}/skills/`,
      { skill },
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );

    dispatch({
      type: skillsActionTypes.ADD_SKILL_SUCCESS,
      skill: response.data,
    });

    const alertId = v4();

    dispatch({
      type: alertsActionTypes.ADD_ALERT,
      alert: {
        id: alertId,
        msg: "Skill successfully added.",
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
        type: skillsActionTypes.ADD_SKILL_FAIL,
        errors,
      });
    } else if (err.request) {
      console.log(err.request);
    } else {
      console.log(err.message);
    }
  }
};

const deleteSkillAction = (id) => async (dispatch, getState) => {
  const {
    authState: { token },
  } = getState();

  try {
    dispatch({ type: skillsActionTypes.DELETE_SKILL });

    await axios.delete(`${baseURL}/skills/${id}`, {
      headers: {
        "x-auth-token": token,
      },
    });

    dispatch({
      type: skillsActionTypes.DELETE_SKILL_SUCCESS,
      id,
    });

    const alertId = v4();

    dispatch({
      type: alertsActionTypes.ADD_ALERT,
      alert: {
        id: alertId,
        msg: "Skill successfully deleted.",
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
        type: skillsActionTypes.DELETE_SKILL_FAIL,
        errors,
      });
    } else if (err.request) {
      console.log(err.request);
    } else {
      console.log(err.message);
    }
  }
};

export { getSkillsAction, addSkillAction, deleteSkillAction };
