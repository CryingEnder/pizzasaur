import React, { useState, createContext } from "react";

export const SortingContext = createContext();
SortingContext.displayName = "SortingContext";

export function SortingProvider({ children }) {
  const [sortingState, setSortingState] = useState("");

  return (
    <SortingContext.Provider value={{ sortingState, setSortingState }}>
      {children}
    </SortingContext.Provider>
  );
}
