import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from "redux";
import { reducer } from "./reducer/reducer";
import { Provider } from "react-redux";

import App from "./App";
const store = createStore(reducer);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

