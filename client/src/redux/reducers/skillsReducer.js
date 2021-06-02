import * as skillsActionTypes from "../actionTypes/skillsActionTypes";

const initState = {
  skills: [],
  isLoading: false,
  errors: [],
};

const skillsReducer = (state = initState, action) => {
  switch (action.type) {
    case skillsActionTypes.GET_SKILLS:
    case skillsActionTypes.ADD_SKILL:
    case skillsActionTypes.DELETE_SKILL:
      return {
        ...state,
        isLoading: true,
      };
    case skillsActionTypes.GET_SKILLS_SUCCESS:
      return {
        ...state,
        skills: action.skills,
        isLoading: false,
      };
    case skillsActionTypes.ADD_SKILL_SUCCESS:
      return {
        ...state,
        skills: [...state.skills, action.skill],
        isLoading: false,
        errors: null,
      };
    case skillsActionTypes.DELETE_SKILL_SUCCESS:
      return {
        ...state,
        skills: state.skills.filter((project) => project._id !== action.id),
        isLoading: false,
      };
    case skillsActionTypes.GET_SKILLS_FAIL:
    case skillsActionTypes.ADD_SKILL_FAIL:
    case skillsActionTypes.DELETE_SKILL_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: action.errors,
      };
    default:
      return state;
  }
};

export default skillsReducer;
