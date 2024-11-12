import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { countSelector } from "./redux/selectors/counterSelectors";
import { increment } from "./redux/increment/counterIncrementActions";
import { decrement } from "./redux/decrement/counterDecrementActions";

export const Counter = ({
  counterValueTestId,
  incrementButtonTestId,
  decrementButtonTestId,
}) => {
  const dispatch = useDispatch();
  const count = useSelector(countSelector);

  const incrementOnClick = () => {
    dispatch(increment(count));
  };

  const decrementOnClick = () => {
    dispatch(decrement(count));
  };

  return (
    <>
      <h1 data-testid={counterValueTestId}>{count}</h1>
      <button onClick={incrementOnClick} data-testid={incrementButtonTestId}>
        Add
      </button>
      <button onClick={decrementOnClick} data-testid={decrementButtonTestId}>
        Subtract
      </button>
    </>
  );
};
