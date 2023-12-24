import React from "react";
import styles from "./HomePage.module.css";
import { IoGridSharp } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { FaThList, FaChevronDown } from "react-icons/fa";
import Filter from "../../Components/Filter/Filter";
import { useState } from "react";
import ViewCartBtn from "../../Utils/ViewCartBtn/ViewCartBtn";
import ProductCard from "../../Components/ProductCard/ProductCard";

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

      <div className={styles.productArea}>
        <div className={styles.viewOption}>
          <IoGridSharp className={styles.viewtype} />
          <FaThList className={styles.viewtype} />
        </div>

        <div className={styles.filters}>
          <Filter key="1" name="Headphone Type" />
          <Filter key="2" name="Company" />
          <Filter key="3" name="Colour" />
          <Filter key="4" name="Price" />
        </div>

        <div>
          <Filter key="5" name="Sort by : Featured" />
        </div>
      </div>

      <div className={styles.productContainer}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default HomePage;
