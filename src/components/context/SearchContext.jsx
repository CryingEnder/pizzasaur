import React, { useState, createContext } from "react";

export const SearchContext = createContext();
SearchContext.displayName = "SearchContext";

export function SearchProvider({ children }) {
  const [searchState, setSearchState] = useState("");

  return (
    <SearchContext.Provider value={{ searchState, setSearchState }}>
      {children}
    </SearchContext.Provider>
  );
}
