import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { reportWebVitals } from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store";

export const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);

reportWebVitals(console.log);
