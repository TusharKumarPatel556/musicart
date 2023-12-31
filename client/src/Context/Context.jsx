import React from "react";
import { useNavigate } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import { InventoryInfo } from "../Api/ProductApi/ProductApi";
import { SetCartItem } from "../Api/UserApi/UserApi";

export const MusicContext = createContext();

const DataProvider = ({ children }) => {
  const [LoggedIn, SetLoggedIn] = useState(true);
  const [InventoryData, SetInventoryData] = useState([]);
  const [Filters, SetFilters] = useState({});
  const [UserCart, SetUserCart] = useState({});
  const [CartItems, SetCartItems] = useState([]);

  // const Navigate = useNavigate();

  const HandleLogin = (parameter) => {
    SetLoggedIn(!LoggedIn);
  };

  // const GetInventory = async () => {
  //   const response = await InventoryInfo();
  //   SetInventoryData(response);
  // };

  useEffect(
    () => {
      if (localStorage.getItem("token")) {
        SetLoggedIn(true);
      } else {
        SetLoggedIn(false);
        // Navigate("/login");
      }
    },
    [UserCart],
    [CartItems]
  );

  // useEffect(() => {
  //   GetInventory();
  // }, []);

  useEffect(() => {
    HandleLogin();
  }, []);
  useEffect(() => {
    SetCartItem(UserCart);
  }, [UserCart]);

  const InitialState = {
    LoggedIn,
    SetLoggedIn,
    HandleLogin,
    InventoryData,
    SetInventoryData,
    Filters,
    SetFilters,
    UserCart,
    SetUserCart,
    CartItems,
    SetCartItems,
  };

  return (
    <MusicContext.Provider value={InitialState}>
      {children}
    </MusicContext.Provider>
  );
};

export default DataProvider;
