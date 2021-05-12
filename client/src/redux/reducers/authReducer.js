import {
  AUTHENTICATE_ADMIN,
  AUTHENTICATE_ADMIN_SUCCESS,
  AUTHENTICATE_ADMIN_FAIL,
  LOGOUT,
} from "../actionTypes/authActionTypes";

const initState = {
  token: localStorage.getItem("token"),
  isAuthenticated: !!localStorage.getItem("token"),
  isLoading: false,
  errors: null,
};

const authReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTHENTICATE_ADMIN:
      return {
        ...state,
        isLoading: true,
      };
    case AUTHENTICATE_ADMIN_SUCCESS:
      localStorage.setItem("token", payload);

      return {
        token: payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case AUTHENTICATE_ADMIN_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };
    case LOGOUT:
      localStorage.removeItem("token");

      return {
        ...state,
        token: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
