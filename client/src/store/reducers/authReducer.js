const initState = {
  token: localStorage.getItem("token"),
  isAuthenticated: !!localStorage.getItem("token"),
  loading: false,
  errors: null,
};

const authReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "AUTHENTICATE_ADMIN":
      return {
        ...state,
        loading: true,
      };
    case "AUTHENTICATE_ADMIN_SUCCESS":
      localStorage.setItem("token", payload);

      return {
        token: payload,
        isAuthenticated: true,
        loading: false,
      };
    case "AUTHENTICATE_ADMIN_FAIL":
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case "LOGOUT":
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
