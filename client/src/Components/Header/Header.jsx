import React from "react";
import styles from "./Header.module.css";
import { FiPhoneCall } from "react-icons/fi";
const Header = () => {
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
        <button type="">Login</button>
        <button type="">Signup</button>
      </div>
    </div>
  );
};

export default Header;
