import {
  decrement,
  DECREMENT,
  DECREMENT_FAILURE,
  DECREMENT_PROCESSING,
  DECREMENT_SUCCESS,
  decrementFailure,
  decrementProcessing,
  decrementSuccess,
} from "./counterDecrementActions";

describe("Decrement Actions", () => {
  test("decrement should create an action to decrement", () => {
    const payload = 1;
    const expectedAction = {
      type: DECREMENT,
      payload,
    };

    expect(decrement(payload)).toEqual(expectedAction);
  });

  test("processing should create an action to indicate processing", () => {
    const expectedAction = {
      type: DECREMENT_PROCESSING,
    };

    expect(decrementProcessing()).toEqual(expectedAction);
  });

  test("success should create an action for successful decrement", () => {
    const payload = 1;
    const expectedAction = {
      type: DECREMENT_SUCCESS,
      payload,
    };

    expect(decrementSuccess(payload)).toEqual(expectedAction);
  });

  test("failure should create an action for failed decrement", () => {
    const expectedAction = {
      type: DECREMENT_FAILURE,
    };

    expect(decrementFailure()).toEqual(expectedAction);
  });
});
