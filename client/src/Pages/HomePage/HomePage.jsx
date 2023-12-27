import React, { useEffect } from "react";
import styles from "./HomePage.module.css";
import { IoGridSharp } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { FaThList, FaChevronDown } from "react-icons/fa";
import Filter from "../../Components/Filter/Filter";
import { useState, useContext } from "react";
import AboutPage from "../../Utils/AboutPageContainer/AboutPage";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { AllProducts } from "../../Api/ProductApi/ProductApi";
import { MusicContext } from "../../Context/Context";

const HomePage = () => {
  const [SearchItem, SetSearchItem] = useState("");
  const [Products, SetProducts] = useState([]);
  const { InventoryData } = useContext(MusicContext);

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

  const GetProductsData = async () => {
    const data = await AllProducts();

    SetProducts(data);
  };

  useEffect(() => {
    GetProductsData();
  }, []);

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
          {InventoryData.map((item, index) => (
            // console.log(item.list)
            <Filter key={index} list={item.list} name={item.filter_name} />
          ))}
        </div>

        <div>
          <Filter key="5" name="Sort by : Featured" />
        </div>
      </div>

      <div className={styles.productContainer}>
        {Products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
