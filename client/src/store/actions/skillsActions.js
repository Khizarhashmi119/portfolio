import axios from "axios";
import { v4 } from "uuid";

const getSkillsAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_SKILLS" });
      const response = await axios.get("/api/skills/");
      dispatch({ type: "GET_SKILLS_SUCCESS", payload: response.data });
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

      dispatch({ type: "GET_SKILLS_FAIL", payload: errors || err });
    }
  };
};

const addSkillAction = (skill) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "ADD_SKILL" });

      const response = await axios.post(
        "/api/skills/create",
        { skill },
        {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      );

      dispatch({ type: "ADD_SKILL_SUCCESS", payload: response.data });
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

      dispatch({ type: "ADD_SKILL_FAIL", payload: errors || err });
    }
  };
};

const deleteSkillAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "DELETE_SKILL" });

      await axios.delete(`/api/skills/${id}`, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });

      dispatch({ type: "DELETE_SKILL_SUCCESS", payload: id });
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

      dispatch({ type: "DELETE_SKILL_FAIL", payload: errors || err });
    }
  };
};

export { getSkillsAction, addSkillAction, deleteSkillAction };
