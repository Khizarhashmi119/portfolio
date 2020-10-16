const initState = {
  projects: [],
  loading: false,
  errors: null,
};

const projectsReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_PROJECTS":
    case "ADD_PROJECT":
    case "DELETE_PROJECT":
    case "UPATE_PROJECT":
      return {
        ...state,
        loading: true,
      };
    case "GET_PROJECTS_SUCCESS":
      return {
        projects: payload,
        loading: false,
      };
    case "ADD_PROJECT_SUCCESS":
      return {
        ...state,
        projects: [payload, ...state.projects],
        loading: false,
      };
    case "DELETE_PROJECT_SUCCESS":
      return {
        ...state,
        projects: state.projects.filter((project) => project._id !== payload),
        loading: false,
      };
    case "UPDATE_PROJECT_SUCCESS":
      const index = state.projects
        .map((project) => project._id)
        .indexOf(payload._id);
      const projects = [...state.projects];
      projects[index] = payload;
      return {
        ...state,
        projects,
        loading: false,
      };
    case "GET_PROJECTS_FAIL":
    case "ADD_PROJECT_FAIL":
    case "DELETE_PROJECT_FAIL":
    case "UPDATE_PROJECT_FAIL":
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    default:
      return state;
  }
};

export default projectsReducer;
