export const DECREMENT = "DECREMENT";
export const DECREMENT_PROCESSING = "DECREMENT_PROCESSING";
export const DECREMENT_SUCCESS = "DECREMENT_SUCCESS";
export const DECREMENT_FAILURE = "DECREMENT_FAILURE";

export const decrement = (payload) => ({ type: DECREMENT, payload });

export const decrementProcessing = () => ({ type: DECREMENT_PROCESSING });

export const decrementSuccess = (payload) => ({
  type: DECREMENT_SUCCESS,
  payload,
});

export const decrementFailure = () => ({ type: DECREMENT_FAILURE });
