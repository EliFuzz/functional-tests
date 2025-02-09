import {
  INCREMENT_FAILURE,
  INCREMENT_PROCESSING,
  INCREMENT_SUCCESS,
} from "./counterIncrementActions";
import { incrementActions } from "./counterIncrementReducer";
import { initialState } from "../../counterReducer";

describe("Increment Reducer", () => {
  test("processing should indicate processing", () => {
    const newState = incrementActions[INCREMENT_PROCESSING](initialState);

    expect(newState.count).toEqual(0);
    expect(newState.processing).toEqual(true);
    expect(newState.success).toEqual(false);
  });

  test("success should update store successfully", () => {
    const payload = 5;
    const newState = incrementActions[INCREMENT_SUCCESS](initialState, payload);

    expect(newState.count).toEqual(payload);
    expect(newState.processing).toEqual(false);
    expect(newState.success).toEqual(true);
  });

  test("failure should indicate failure", () => {
    const newState = incrementActions[INCREMENT_FAILURE](initialState);

    expect(newState.count).toEqual(0);
    expect(newState.processing).toEqual(false);
    expect(newState.success).toEqual(false);
  });
});
