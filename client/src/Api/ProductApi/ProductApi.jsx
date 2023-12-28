import axios from "axios";

const BaseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

export const AllProducts = async (Filters) => {
  try {
    console.log("Filter Data", Filters);
    const response = await axios({
      method: "get",
      url: `${BaseUrl}/api/products/some-products`,
      params: Filters,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data.products;
  } catch (error) {
    return error.message;
  }
};
export const InventoryInfo = async () => {
  try {
    const response = await axios({
      method: "get",
      url: `${BaseUrl}/api/products/inventory-detail`,
    });
    return response.data.Inventory;
  } catch (error) {
    return error.message;
  }
};
