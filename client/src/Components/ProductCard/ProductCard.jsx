import React from "react";
import { useState } from "react";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  const [View, SetView] = useState("grid");

  return (
    <div className={View === "grid" ? styles.gridCard : styles.listCard}>
      <div
        className={View === "grid" ? styles.gridCardImg : styles.listCardImg}
      >
        <img
          src="https://images.pexels.com/photos/5877660/pexels-photo-5877660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Product Description"
        />
      </div>
      <div
        className={
          View === "grid"
            ? styles.productDescription
            : styles.productDescription
        }
      >
        <h3>BoAt RocKerz 551 ANC</h3>
        <h3>Price- &#8377;3,500</h3>
        <h4>Black | Over-ear Headphone</h4>
      </div>
    </div>
  );
};

export default ProductCard;
