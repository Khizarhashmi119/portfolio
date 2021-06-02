import * as projectsActionTypes from "../actionTypes/projectsActionTypes";

const initState = {
  project: null,
  projects: [],
  isLoading: false,
  errors: [],
};

const projectsReducer = (state = initState, action) => {
  switch (action.type) {
    case projectsActionTypes.GET_PROJECTS:
    case projectsActionTypes.GET_PROJECT:
    case projectsActionTypes.ADD_PROJECT:
    case projectsActionTypes.DELETE_PROJECT:
    case projectsActionTypes.UPDATE_PROJECT:
      return {
        ...state,
        isLoading: true,
      };
    case projectsActionTypes.GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.projects,
        isLoading: false,
      };
    case projectsActionTypes.GET_PROJECT_SUCCESS:
      return {
        ...state,
        project: action.project,
        isLoading: false,
      };
    case projectsActionTypes.ADD_PROJECT_SUCCESS:
      return {
        ...state,
        projects: [action.project, ...state.projects],
        isLoading: false,
      };
    case projectsActionTypes.DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        projects: state.projects.filter((project) => project._id !== action.id),
        isLoading: false,
      };
    case projectsActionTypes.UPDATE_PROJECT_SUCCESS:
      return {
        ...state,
        project: action.project,
        projects: state.projects.map((project) => {
          return project._id !== action.id ? project : action.project;
        }),
        isLoading: false,
      };
    case projectsActionTypes.GET_PROJECTS_FAIL:
    case projectsActionTypes.GET_PROJECT_FAIL:
    case projectsActionTypes.ADD_PROJECT_FAIL:
    case projectsActionTypes.DELETE_PROJECT_FAIL:
    case projectsActionTypes.UPDATE_PROJECT_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: action.errors,
      };
    default:
      return state;
  }
};

export default projectsReducer;
