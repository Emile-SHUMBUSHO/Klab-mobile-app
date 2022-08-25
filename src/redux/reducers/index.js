import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ProgramReducer from "./ProgramReducer";
import RegisterChildReducer from "./RegisterChildReducer";
export default combineReducers({
  Auth: AuthReducer,
  program: ProgramReducer,
  registerChild: RegisterChildReducer,
});
