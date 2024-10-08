import React, { createContext, useState } from "react";

const ThemeContext = createContext(false);
// Provider
const ThemeProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const toggleFunction = () => {
    setToggle(!toggle);
  };
  return (
    <ThemeContext.Provider value={{ toggle, toggleFunction }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeContext, ThemeProvider };
