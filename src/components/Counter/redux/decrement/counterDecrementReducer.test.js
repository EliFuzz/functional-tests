import { decrementActions } from "./counterDecrementReducer";
import {
  DECREMENT_FAILURE,
  DECREMENT_PROCESSING,
  DECREMENT_SUCCESS,
} from "./counterDecrementActions";
import { initialState } from "../../counterReducer";

describe("Decrement Reducer", () => {
  test("processing should indicate processing", () => {
    const newState = decrementActions[DECREMENT_PROCESSING](initialState);

    expect(newState.count).toEqual(0);
    expect(newState.processing).toEqual(true);
    expect(newState.success).toEqual(false);
  });

  test("success should update store successfully", () => {
    const payload = 5;
    const newState = decrementActions[DECREMENT_SUCCESS](initialState, payload);

    expect(newState.count).toEqual(payload);
    expect(newState.processing).toEqual(false);
    expect(newState.success).toEqual(true);
  });

  test("failure should indicate failure", () => {
    const newState = decrementActions[DECREMENT_FAILURE](initialState);

    expect(newState.count).toEqual(0);
    expect(newState.processing).toEqual(false);
    expect(newState.success).toEqual(false);
  });
});
