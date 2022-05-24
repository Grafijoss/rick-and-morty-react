import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { createStore } from "redux";
import { reducer } from "./reducer/reducer";
import { Provider } from "react-redux";

import App from "./App";
const store = createStore(reducer);

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
