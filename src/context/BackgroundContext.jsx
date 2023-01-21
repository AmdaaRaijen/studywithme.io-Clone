import React, { createContext } from "react";
import useLocalStorageState from "../hooks/useLocalStorage";

export const BackgroundContext = createContext();

export const BackgroundContextProvider = ({ children }) => {
  const [backgroundName, setBackgroundName] = useLocalStorageState(
    "bg-name",
    "Tokyo afternoon"
  );

  return (
    <BackgroundContext.Provider value={{ backgroundName, setBackgroundName }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const BackgroundUrlContext = createContext();

export const BackgroundUrlContextProvider = ({ children }) => {
  const [backgroundUrl, setBackgroundUrl] = useLocalStorageState("bg-url", "");

  return (
    <BackgroundUrlContext.Provider value={{ backgroundUrl, setBackgroundUrl }}>
      {children}
    </BackgroundUrlContext.Provider>
  );
};
