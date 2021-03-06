import axios from "axios";
import { v4 } from "uuid";

const authenticateAdminAction = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "AUTHENTICATE_ADMIN" });

      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });

      dispatch({
        type: "AUTHENTICATE_ADMIN_SUCCESS",
        payload: response.data.token,
      });
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors.length > 0) {
        errors.forEach((error) => {
          const id = v4();
          dispatch({
            type: "ADD_ALERT",
            payload: { id, msg: error.msg, type: "error" },
          });

          setTimeout(
            () => dispatch({ type: "DELETE_ALERT", payload: id }),
            5000
          );
        });
      }

      dispatch({ type: "AUTHENTICATE_ADMIN_FAIL", payload: errors });
    }
  };
};

export { authenticateAdminAction };
