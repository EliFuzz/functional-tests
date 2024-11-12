import { countSelector } from "./counterSelectors";

describe("Count Selector", () => {
  it("should return the count from the state", () => {
    const state = {
      counter: {
        count: 5,
      },
    };

    expect(countSelector(state)).toEqual(5);
  });
});
