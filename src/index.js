import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SearchPage from "./components/SearchPage";
import App from "./App";
import { SearchProvider } from "./SearchProvider";
import reducer, { initialState } from "./reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SearchProvider initialState={initialState} reducer={reducer}>
    <App />
  </SearchProvider>
);

/*
  <SearchProvider initialState={initialState} reducer={reducer}>
    <App />
  </SearchProvider>
*/
