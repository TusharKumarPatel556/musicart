import React from "react";
import { createContext, useState } from "react";

export const MusicContext = createContext();

const DataProvider = ({ children }) => {
  const [LoggedIn, SetLoggedIn] = useState(false);

  const HandleLogin = () => {
    SetLoggedIn(!LoggedIn);
  };

  const InitialState = {
    LoggedIn,
    SetLoggedIn,
    HandleLogin,
  };

  return (
    <MusicContext.Provider value={InitialState}>
      {children}
    </MusicContext.Provider>
  );
};

export default DataProvider;
