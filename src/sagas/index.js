import { all } from "redux-saga/effects";
import { counterSaga } from "../components/Counter/counterSaga";

export const rootSaga = function* () {
  yield all([counterSaga()]);
};
