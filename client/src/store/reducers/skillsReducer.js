const initState = {
  skills: [],
  loading: false,
  errors: null,
};

const skillsReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_SKILLS":
    case "ADD_SKILL":
    case "DELETE_SKILL":
      return {
        ...state,
        loading: true,
      };
    case "GET_SKILLS_SUCCESS":
      return {
        skills: payload,
        loading: false,
      };
    case "ADD_SKILL_SUCCESS":
      return {
        skills: [...state.skills, payload],
        loading: false,
        errors: null,
      };
    case "DELETE_SKILL_SUCCESS":
      return {
        ...state,
        skills: state.skills.filter((project) => project._id !== payload),
        loading: false,
      };
    case "GET_SKILLS_FAIL":
    case "ADD_SKILL_FAIL":
    case "DELETE_SKILL_FAIL":
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    default:
      return state;
  }
};

export default skillsReducer;
