import {
  counterDecrement,
  counterDecrementSaga,
} from "./counterDecrementSagas";
import {
  DECREMENT,
  decrementFailure,
  decrementProcessing,
  decrementSuccess,
} from "./counterDecrementActions";
import { call, put, select, takeEvery } from "redux-saga/effects";
import * as apiModule from "../../../../utils/api/api";
import { countSelector } from "../selectors/counterSelectors";

describe("Decrement Saga", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("dispatch success action on successful API call", () => {
    const mockCount = 8;
    const generator = counterDecrement();

    jest
      .spyOn(apiModule, "api")
      .mockImplementation(() => Promise.resolve({ amount: mockCount }));

    expect(generator.next().value).toEqual(put(decrementProcessing()));
    expect(generator.next().value).toEqual(select(countSelector));
    expect(generator.next(mockCount).value).toEqual(
      call(apiModule.api, "DECREMENT", mockCount),
    );
    expect(generator.next({ amount: mockCount }).value).toEqual(
      put(decrementSuccess(mockCount)),
    );
  });

  test("dispatch failure action on API call failure", () => {
    const generatorWithError = counterDecrement();

    generatorWithError.next(); // decrementProcessing
    generatorWithError.next(); // select

    expect(
      generatorWithError.throw(new Error("API call failed")).value,
    ).toEqual(put(decrementFailure()));
  });

  test("counter decrement saga should listen to all actions", () => {
    const generator = counterDecrementSaga();
    expect(generator.next().value).toEqual(
      takeEvery(DECREMENT, counterDecrement),
    );
    expect(generator.next().done).toBe(true);
  });
});
