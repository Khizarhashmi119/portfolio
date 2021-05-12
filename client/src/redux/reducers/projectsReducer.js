import {
  GET_PROJECTS,
  GET_PROJECT,
  ADD_PROJECT,
  DELETE_PROJECT,
  UPDATE_PROJECT,
  GET_PROJECTS_SUCCESS,
  GET_PROJECT_SUCCESS,
  ADD_PROJECT_SUCCESS,
  DELETE_PROJECT_SUCCESS,
  UPDATE_PROJECT_SUCCESS,
  GET_PROJECTS_FAIL,
  GET_PROJECT_FAIL,
  ADD_PROJECT_FAIL,
  DELETE_PROJECT_FAIL,
  UPDATE_PROJECT_FAIL,
} from "../actionTypes/projectsActionTypes";

const initState = {
  project: null,
  projects: [],
  isLoading: false,
  errors: null,
};

const projectsReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PROJECTS:
    case GET_PROJECT:
    case ADD_PROJECT:
    case DELETE_PROJECT:
    case UPDATE_PROJECT:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: payload,
        isLoading: false,
      };
    case GET_PROJECT_SUCCESS:
      return {
        ...state,
        project: payload,
        isLoading: false,
      };
    case ADD_PROJECT_SUCCESS:
      return {
        ...state,
        projects: [payload, ...state.projects],
        isLoading: false,
        errors: null,
      };
    case DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        projects: state.projects.filter((project) => project._id !== payload),
        isLoading: false,
      };
    case UPDATE_PROJECT_SUCCESS:
      return {
        ...state,
        project: payload.project,
        projects: state.projects.map((project) => {
          return project._id !== payload.id ? project : payload.project;
        }),
        isLoading: false,
        errors: null,
      };
    case GET_PROJECTS_FAIL:
    case GET_PROJECT_FAIL:
    case ADD_PROJECT_FAIL:
    case DELETE_PROJECT_FAIL:
    case UPDATE_PROJECT_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };
    default:
      return state;
  }
};

export default projectsReducer;
