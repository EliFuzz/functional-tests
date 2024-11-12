import { all } from "redux-saga/effects";
import { counterIncrementSaga } from "./redux/increment/counterIncrementSagas";
import { counterDecrementSaga } from "./redux/decrement/counterDecrementSagas";

export const counterSaga = function* () {
  yield all([counterIncrementSaga(), counterDecrementSaga()]);
};
