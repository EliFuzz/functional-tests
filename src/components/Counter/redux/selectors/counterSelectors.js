import { createSelector } from "@reduxjs/toolkit";

const counter = (state) => state.counter;

export const countSelector = createSelector(
  [counter],
  (counter) => counter.count,
);
