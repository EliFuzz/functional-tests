import {
  increment,
  INCREMENT,
  INCREMENT_FAILURE,
  INCREMENT_PROCESSING,
  INCREMENT_SUCCESS,
  incrementFailure,
  incrementProcessing,
  incrementSuccess,
} from "./counterIncrementActions";

describe("Increment Actions", () => {
  test("increment should create an action to increment", () => {
    const payload = 1;
    const expectedAction = {
      type: INCREMENT,
      payload,
    };

    expect(increment(payload)).toEqual(expectedAction);
  });

  test("processing should create an action to indicate processing", () => {
    const expectedAction = {
      type: INCREMENT_PROCESSING,
    };

    expect(incrementProcessing()).toEqual(expectedAction);
  });

  test("success should create an action for successful increment", () => {
    const payload = 1;
    const expectedAction = {
      type: INCREMENT_SUCCESS,
      payload,
    };

    expect(incrementSuccess(payload)).toEqual(expectedAction);
  });

  test("failure should create an action for failed increment", () => {
    const expectedAction = {
      type: INCREMENT_FAILURE,
    };

    expect(incrementFailure()).toEqual(expectedAction);
  });
});
