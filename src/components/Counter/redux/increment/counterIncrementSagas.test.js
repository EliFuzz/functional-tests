import { call, put, select, takeEvery } from "redux-saga/effects";
import * as apiModule from "../../../../utils/api/api";
import { countSelector } from "../selectors/counterSelectors";
import {
  INCREMENT,
  incrementFailure,
  incrementProcessing,
  incrementSuccess,
} from "./counterIncrementActions";
import {
  counterIncrement,
  counterIncrementSaga,
} from "./counterIncrementSagas";

describe("Increment Saga", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("dispatch success action on successful API call", () => {
    const mockCount = 8;
    const generator = counterIncrement();

    jest
      .spyOn(apiModule, "api")
      .mockImplementation(() => Promise.resolve({ amount: mockCount }));

    expect(generator.next().value).toEqual(put(incrementProcessing()));
    expect(generator.next().value).toEqual(select(countSelector));
    expect(generator.next(mockCount).value).toEqual(
      call(apiModule.api, "INCREMENT", mockCount),
    );
    expect(generator.next({ amount: mockCount }).value).toEqual(
      put(incrementSuccess(mockCount)),
    );
  });

  test("dispatch failure action on API call failure", () => {
    const generatorWithError = counterIncrement();

    generatorWithError.next(); // incrementProcessing
    generatorWithError.next(); // select

    expect(
      generatorWithError.throw(new Error("API call failed")).value,
    ).toEqual(put(incrementFailure()));
  });

  test("counter increment saga should listen to all actions", () => {
    const generator = counterIncrementSaga();
    expect(generator.next().value).toEqual(
      takeEvery(INCREMENT, counterIncrement),
    );
    expect(generator.next().done).toBe(true);
  });
});
