import React from "react";
import { useState, useEffect } from "react";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  const [View, SetView] = useState("grid");
  console.log("At the product card");

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
            ? styles.gridproductDescription
            : styles.listproductDescription
        }
      >
        <h3>BoAt RocKerz 551 ANC</h3>
        <h3>Price- &#8377;3,500</h3>
        <h4>Black | Over-ear Headphone</h4>
        {View === "list" ? (
          <div>
            {" "}
            <p>
              Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation
              Headphones with Mic, up to 50 Hours Playtime, Multi-Point
              Connection, App Support, AUX & Voice Assistant Support for Mobile
              Phones (Black)
            </p>
            <button className={styles.detailsBtn} type="">
              Details
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProductCard;
