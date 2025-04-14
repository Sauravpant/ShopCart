import { createContext, useState } from "react";

const searchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <searchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </searchContext.Provider>
  );
};
export default searchContext;