import { counterReducer, initialState } from "./counterReducer";

describe("Counter Reducer", () => {
  it("should return the initial state", () => {
    expect(counterReducer(undefined, {})).toEqual(initialState);
  });

  it("should return the current state for unknown actions", () => {
    expect(counterReducer(initialState, { type: "UNKNOWN_ACTION" })).toEqual(
      initialState,
    );
  });
});
