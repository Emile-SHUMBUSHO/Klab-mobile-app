import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ProgramReducer from "./ProgramReducer";
import RegisterChildReducer from "./RegisterChildReducer";
import EventsReducer from "./EventsReducer";
import PaymentReducer from "./PaymentReducer";
export default combineReducers({
  Auth: AuthReducer,
  program: ProgramReducer,
  child: RegisterChildReducer,
  event: EventsReducer,
  payment: PaymentReducer,
});
