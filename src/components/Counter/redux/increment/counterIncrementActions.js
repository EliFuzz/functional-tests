export const INCREMENT = "INCREMENT";
export const INCREMENT_PROCESSING = "INCREMENT_PROCESSING";
export const INCREMENT_SUCCESS = "INCREMENT_SUCCESS";
export const INCREMENT_FAILURE = "INCREMENT_FAILURE";

export const increment = (payload) => ({ type: INCREMENT, payload });

export const incrementProcessing = () => ({ type: INCREMENT_PROCESSING });

export const incrementSuccess = (payload) => ({
  type: INCREMENT_SUCCESS,
  payload,
});

export const incrementFailure = () => ({ type: INCREMENT_FAILURE });
