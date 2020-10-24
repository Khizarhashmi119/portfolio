import { combineReducers } from "redux";

import authReducer from "./authReducer";
import projectsReducer from "./projectsReducer";
import alertsReducer from "./alertsReducer";
import skillsReducer from "./skillsReducer";

const rootReducer = combineReducers({
  authState: authReducer,
  projectsState: projectsReducer,
  alertsState: alertsReducer,
  skillsState: skillsReducer,
});

export default rootReducer;
