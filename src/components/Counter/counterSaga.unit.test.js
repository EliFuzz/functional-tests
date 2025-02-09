import { counterSaga } from "./counterSaga";

describe("Counter Saga", () => {
  test("counter saga should listen to all actions", () => {
    const generator = counterSaga();

    expect(generator.next().done).toBe(false); // all([sagas])
    expect(generator.next().done).toBe(true); // done
  });
});
