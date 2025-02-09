import React from "react";
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { Counter } from "./Counter";
import { store } from "../../store";
import { api } from "../../utils/api/api";

jest.mock("../../utils/api/api");

describe("Counter Component", () => {
  const counterValue = "counter-value";
  const incrementButton = "increment-button";
  const decrementButton = "decrement-button";

  beforeEach(() => {
    act(() => {
      render(
        <Provider store={store}>
          <Counter
            counterValueTestId={counterValue}
            incrementButtonTestId={incrementButton}
            decrementButtonTestId={decrementButton}
          />
        </Provider>,
      );
    });
  });

  afterEach(() => {
    cleanup();
  });

  it("renders the initial count", () => {
    expect(screen.getByTestId(counterValue).textContent).toBe("0");
  });

  it("increment on click success", async () => {
    api.mockResolvedValue({ amount: 1 });

    fireEvent.click(screen.getByTestId(incrementButton));

    expect(api).toHaveBeenCalledTimes(1);
    await waitFor(() =>
      expect(screen.getByTestId(counterValue).textContent).toBe("1"),
    );

    api.mockResolvedValue({ amount: 0 }); // same API call

    fireEvent.click(screen.getByTestId(decrementButton));

    expect(api).toHaveBeenCalledTimes(2);
    await waitFor(() =>
      expect(screen.getByTestId(counterValue).textContent).toBe("0"),
    );
  });
});
