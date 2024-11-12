import { incrementActions } from "./redux/increment/counterIncrementReducer";
import { decrementActions } from "./redux/decrement/counterDecrementReducer";

export const initialState = {
  count: 0,
  processing: false,
  success: false,
};

const actions = {
  ...incrementActions,
  ...decrementActions,
};

export const counterReducer = (state = initialState, action) => {
  return actions[action.type]?.(state, action?.payload) || state;
};
