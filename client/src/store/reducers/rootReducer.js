import { combineReducers } from "redux";

import authReducer from "./authReducer";
import projectsReducer from "./projectsReducer";
import alertsReducer from "./alertsReducer";

const rootReducer = combineReducers({
  authState: authReducer,
  projectsState: projectsReducer,
  alertsState: alertsReducer,
});

export default rootReducer;
