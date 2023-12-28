import axios from "axios";

const BaseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

export const Register = async (userData) => {
  try {
    const response = await axios({
      method: "post",
      url: `${BaseUrl}/api/user/register`,
      data: userData,
      headers: {
        "Content-Type": "application/json",
      },
    });
    localStorage.setItem("token", response.data.token);

    return response.data.message;
  } catch (err) {
    return err;
  }
};

export const LoginUser = async (userData) => {
  try {
    const response = await axios({
      method: "get",
      url: `${BaseUrl}/api/user/login`,
      params: userData,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status == 200) {
      localStorage.setItem("token", response.data.token);
      return response.data.message;
    }
  } catch (err) {
    return err;
  }
};

export const Logout = () => {
  console.log("logout ");
  localStorage.removeItem("token");
};

export const AddItem = async (CartItems) => {
  try {
    const response = await axios({
      method: "put",
      url: `${BaseUrl}/api/user/user-cart`,
      data: CartItems,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data.message;
  } catch (err) {
    return err;
  }
};
