import React from "react";
import { createContext, useState, useEffect } from "react";

export const MusicContext = createContext();

const DataProvider = ({ children }) => {
  const [LoggedIn, SetLoggedIn] = useState(false);

  const HandleLogin = () => {
    SetLoggedIn(!LoggedIn);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      SetLoggedIn(true);
    }
  }, [LoggedIn]);

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
