import { call, put, select, takeEvery } from "redux-saga/effects";
import {
  INCREMENT,
  incrementFailure,
  incrementProcessing,
  incrementSuccess,
} from "./counterIncrementActions";
import { countSelector } from "../selectors/counterSelectors";
import { api } from "../../../../utils/api/api";

export const counterIncrement = function* () {
  try {
    yield put(incrementProcessing());

    const data = yield select(countSelector);
    const { amount } = yield call(api, "INCREMENT", data);

    yield put(incrementSuccess(amount));
  } catch (error) {
    yield put(incrementFailure());
  }
};

export const counterIncrementSaga = function* () {
  yield takeEvery(INCREMENT, counterIncrement);
};
