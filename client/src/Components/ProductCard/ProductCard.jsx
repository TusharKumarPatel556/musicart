import React from "react";
import { useState, useEffect } from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const [View, SetView] = useState("grid");

  return (
    <div
      id={product._id}
      className={View === "grid" ? styles.gridCard : styles.listCard}
    >
      <div
        className={View === "grid" ? styles.gridCardImg : styles.listCardImg}
      >
        <img src={product.img_url} alt="Product Description" />
      </div>
      <div
        className={
          View === "grid"
            ? styles.gridproductDescription
            : styles.listproductDescription
        }
      >
        <h3>{product.product_name}</h3>
        <h3>Price- &#8377;{product.price}</h3>
        <h4>
          {product.color}| {product.type} Headphone
        </h4>
        {View === "list" ? (
          <div>
            <p>{product.description}</p>
            <div>
              <button className={styles.detailsBtn} type="">
                Details
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProductCard;
