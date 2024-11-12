import {
  INCREMENT_FAILURE,
  INCREMENT_PROCESSING,
  INCREMENT_SUCCESS,
} from "./counterIncrementActions";

export const incrementActions = {
  [INCREMENT_PROCESSING]: (state) => ({
    ...state,
    processing: true,
    success: false,
  }),
  [INCREMENT_SUCCESS]: (state, payload) => ({
    ...state,
    count: payload,
    processing: false,
    success: true,
  }),
  [INCREMENT_FAILURE]: (state) => ({
    ...state,
    processing: false,
    success: false,
  }),
};
