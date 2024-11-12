import { counterReducer } from "../components/Counter/counterReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  counter: counterReducer,
});
