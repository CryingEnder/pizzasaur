import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SearchProvider } from "./components/context/SearchContext";

ReactDOM.render(
  <React.StrictMode>
    <SearchProvider>
      <App />
    </SearchProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
