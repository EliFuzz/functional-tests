import {
  DECREMENT_FAILURE,
  DECREMENT_PROCESSING,
  DECREMENT_SUCCESS,
} from "./counterDecrementActions";

export const decrementActions = {
  [DECREMENT_PROCESSING]: (state) => ({
    ...state,
    processing: true,
    success: false,
  }),
  [DECREMENT_SUCCESS]: (state, payload) => ({
    ...state,
    count: payload,
    processing: false,
    success: true,
  }),
  [DECREMENT_FAILURE]: (state) => ({
    ...state,
    processing: false,
    success: false,
  }),
};
