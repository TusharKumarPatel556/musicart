import React from "react";
import styles from "./ProductDescription.module.css";
import { Outlet } from "react-router-dom";
import AboutPage from "../../Utils/AboutPageContainer/AboutPage";

const ProductDescription = () => {
  return (
    <div className={styles.page}>
      <AboutPage />
      <Outlet />
    </div>
  );
};

export default ProductDescription;
