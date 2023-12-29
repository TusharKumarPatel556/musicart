import React from "react";
import { createContext, useState, useEffect } from "react";
import { InventoryInfo } from "../Api/ProductApi/ProductApi";
import { SetCartItem } from "../Api/UserApi/UserApi";

export const MusicContext = createContext();

const DataProvider = ({ children }) => {
  const [LoggedIn, SetLoggedIn] = useState(false);
  const [InventoryData, SetInventoryData] = useState([]);
  const [Filters, SetFilters] = useState({});
  const [UserCart, SetUserCart] = useState({});
  const [CartItems, SetCartItems] = useState([]);

  const HandleLogin = () => {
    SetLoggedIn(!LoggedIn);
  };

  const GetInventory = async () => {
    const response = await InventoryInfo();
    SetInventoryData(response);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      SetLoggedIn(true);
    }
    GetInventory();
  }, [LoggedIn]);

  useEffect(() => {
    SetCartItem(UserCart);
  }, [UserCart]);

  const InitialState = {
    LoggedIn,
    SetLoggedIn,
    HandleLogin,
    InventoryData,
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
