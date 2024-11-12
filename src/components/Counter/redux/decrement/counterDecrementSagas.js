import { call, put, select, takeEvery } from "redux-saga/effects";
import {
  DECREMENT,
  decrementFailure,
  decrementProcessing,
  decrementSuccess,
} from "./counterDecrementActions";
import { countSelector } from "../selectors/counterSelectors";
import { api } from "../../../../utils/api/api";

export const counterDecrement = function* () {
  try {
    yield put(decrementProcessing());

    const data = yield select(countSelector);
    const { amount } = yield call(api, "DECREMENT", data);

    yield put(decrementSuccess(amount));
  } catch (error) {
    yield put(decrementFailure());
  }
};

export const counterDecrementSaga = function* () {
  yield takeEvery(DECREMENT, counterDecrement);
};
