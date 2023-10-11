import React, { createContext, useState, useContext } from "react";

// Create the global context
const GlobalStateContext = createContext();

// Create a provider component to wrap your app
export const GlobalStateProvider = ({ children }) => {
  const [words, setWords] = useState([]);

  return (
    <GlobalStateContext.Provider value={[words, setWords]}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Create a custom hook to access the global state
export const useGlobalState = () => {
  const [words, setWords] = useContext(GlobalStateContext);
  return [words, setWords];
};
