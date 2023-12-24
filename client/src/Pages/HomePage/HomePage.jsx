import React from "react";
import styles from "./HomePage.module.css";
import { IoGridSharp } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { FaThList, FaChevronDown } from "react-icons/fa";
import Filter from "../../Components/Filter/Filter";
import { useState } from "react";
import AboutPage from "../../Utils/AboutPageContainer/AboutPage";
import ProductCard from "../../Components/ProductCard/ProductCard";

const HomePage = () => {
  const [SearchItem, SetSearchItem] = useState("");

  const HandleGridClick = () => {
    SetView("grid");
    console.log(View);
  };
  const HandleListClick = () => {
    SetView("list");
    console.log(View);
  };

  const HandleChange = (e) => {
    SetSearchItem(e.target.value);
  };

  return (
    <div className={styles.page}>
      <AboutPage />
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
          <IoGridSharp onClick={HandleGridClick} className={styles.viewtype} />
          <FaThList onClick={HandleListClick} className={styles.viewtype} />
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
