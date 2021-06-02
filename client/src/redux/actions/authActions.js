import axios from "axios";
import { v4 } from "uuid";

import * as authActionTypes from "../actionTypes/authActionTypes";
import * as alertsActionTypes from "../actionTypes/alertsActionTypes";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "/api/v1"
    : "http://localhost:5000/api/v1";

const setTokenAction = (token) => {
  return {
    type: authActionTypes.SET_TOKEN,
    token,
  };
};

const loginAdminAction = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: authActionTypes.LOGIN_ADMIN });

    const response = await axios.post(`${baseURL}/auth/login`, {
      email,
      password,
    });

    dispatch({
      type: authActionTypes.LOGIN_ADMIN_SUCCESS,
      token: response.data.token,
    });

    const alertId = v4();

    dispatch({
      type: alertsActionTypes.ADD_ALERT,
      alert: {
        id: alertId,
        msg: "Successfully logged in.",
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
        type: authActionTypes.LOGIN_ADMIN_FAIL,
        errors,
      });
    } else if (err.request) {
      console.log(err.request);
    } else {
      console.log(err.message);
    }
  }
};

const logoutAdminAction = () => {
  return {
    type: authActionTypes.LOGOUT_ADMIN,
  };
};

export { setTokenAction, loginAdminAction, logoutAdminAction };
