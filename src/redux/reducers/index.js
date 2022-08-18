import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ProgramReducer from "./ProgramReducer";
export default combineReducers({
  Auth: AuthReducer,
  Program: ProgramReducer,
});
