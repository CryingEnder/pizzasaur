import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SearchProvider } from "./components/context/SearchContext";
import { SortingProvider } from "./components/context/SortingContext";

ReactDOM.render(
  <React.StrictMode>
    <SortingProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </SortingProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
