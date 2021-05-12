import {
  GET_SKILLS,
  ADD_SKILL,
  DELETE_SKILL,
  GET_SKILLS_SUCCESS,
  ADD_SKILL_SUCCESS,
  DELETE_SKILL_SUCCESS,
  GET_SKILLS_FAIL,
  ADD_SKILL_FAIL,
  DELETE_SKILL_FAIL,
} from "../actionTypes/skillsActionTypes";

const initState = {
  skills: [],
  isLoading: false,
  errors: null,
};

const skillsReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_SKILLS:
    case ADD_SKILL:
    case DELETE_SKILL:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SKILLS_SUCCESS:
      return {
        ...state,
        skills: payload,
        isLoading: false,
      };
    case ADD_SKILL_SUCCESS:
      return {
        ...state,
        skills: [...state.skills, payload],
        isLoading: false,
        errors: null,
      };
    case DELETE_SKILL_SUCCESS:
      return {
        ...state,
        skills: state.skills.filter((project) => project._id !== payload),
        isLoading: false,
      };
    case GET_SKILLS_FAIL:
    case ADD_SKILL_FAIL:
    case DELETE_SKILL_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };
    default:
      return state;
  }
};

export default skillsReducer;
