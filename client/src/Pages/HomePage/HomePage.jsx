import React from "react";
import styles from "./HomePage.module.css";
import { IoGridSharp } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { FaThList } from "react-icons/fa";
import { useState } from "react";
import ViewCartBtn from "../../Utils/ViewCartBtn/ViewCartBtn";

const HomePage = () => {
  const [SearchItem, SetSearchItem] = useState("");

  const HandleChange = (e) => {
    SetSearchItem(e.target.value);
  };

  return (
    <div className={styles.page}>
      <div className={styles.aboutPage}>
        <div className={styles.pageName}>
          <img src="/images/logo.png" alt="Logo" /> <h5>Home</h5>
        </div>
        <ViewCartBtn />
      </div>

      <div className={styles.searchArea}>
        <input
          placeholder="Search Product"
          className={styles.searchConsole}
          onChange={HandleChange}
          value={SearchItem}
        />
        <GoSearch className={styles.searchIcon} />
      </div>

      <div className={styles.filters}>
        <div>
          <IoGridSharp className={styles.viewtype} />
          <FaThList className={styles.viewtype} />
        </div>
      </div>

      <div className={styles.filterSection}>
        <select name="headphonetype" className={styles.filter}>
          <option value=""></option>
        </select>

        <select name="company">
          <option value=""></option>
        </select>

        <select name="colour">
          <option value=""></option>
        </select>

        <select name="price">
          <option value=""></option>
        </select>
      </div>
    </div>
  );
};

export default HomePage;
