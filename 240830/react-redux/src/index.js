import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import { createStore } from "redux";
import rootReducer from "./modules";
import { Provider } from "react-redux";

const store = createStore(rootReducer);
console.log("🚀 ~ store:", store.getState());
console.log("🚀 ~ store:", store.getState().goodsReducer);
console.log("🚀 ~ store:", store.getState().stockReducer);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
