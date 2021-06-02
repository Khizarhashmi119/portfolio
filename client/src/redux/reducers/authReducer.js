import * as authActionTypes from "../actionTypes/authActionTypes";

const initState = {
  token: null,
  isAuthenticated: false,
  isLoading: false,
  errors: [],
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case authActionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.token,
        isAuthenticated: true,
      };
    case authActionTypes.LOGIN_ADMIN:
      return {
        ...state,
        isLoading: true,
      };
    case authActionTypes.LOGIN_ADMIN_SUCCESS:
      localStorage.setItem("token", action.token);

      return {
        token: action.token,
        isAuthenticated: true,
        isLoading: false,
      };
    case authActionTypes.LOGIN_ADMIN_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: action.errors,
      };
    case authActionTypes.LOGOUT_ADMIN:
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
