import React, { useEffect } from "react";
import { useContext } from "react";
import styles from "./Header.module.css";
import { FiPhoneCall } from "react-icons/fi";
import { MusicContext } from "../../Context/Context";
import { NavLink } from "react-router-dom";
import { Logout } from "../../Api/UserApi/UserApi";

const Header = () => {
  const { HandleLogin, LoggedIn } = useContext(MusicContext);

  const HandleClick = () => {
    console.log("Logout clicked");
    HandleLogin(LoggedIn);
    Logout();
  };

  useEffect(() => {}, [LoggedIn]);

  return (
    <div className={styles.header}>
      <div className={styles.phoneNumber}>
        <h5>
          <FiPhoneCall className={styles.callIcon} /> 912121131313
        </h5>
      </div>
      <div className={styles.shopNow}>
        <p>Get 50% off on selected items</p>
        <p>Shop Now</p>
      </div>
      <div className={styles.register}>
        {LoggedIn ? (
          <button onClick={HandleClick} type="">
            Logout
          </button>
        ) : (
          <div>
            <NavLink className={styles.login} to="/login">
              <button type="">Login</button>
            </NavLink>
            <NavLink className={styles.login} to="/signup">
              <button className={styles.signup} type="">
                Signup
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
