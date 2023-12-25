import React from "react";
import { useState } from "react";
import styles from "./ProductDetails.module.css";
import { FaStar } from "react-icons/fa6";
import Carousel from "../Carousel/Carousel";

const ProductDetails = () => {
  const [IsLogIn, SetIsLogIn] = useState(false);

  return (
    <div className={styles.productDetails}>
      <p>
        Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones
        with Mic, up to 50 Hours Playtime, Multi-Point Connection, App Support,
        AUX & Voice Assistant Support for Mobile Phones (Black)
      </p>

      <div className={styles.detail}>
        <div className={styles.slider}>
          <Carousel />
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.mainImage}>
            <img
              src="https://images.pexels.com/photos/5877660/pexels-photo-5877660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Product Name"
            />
          </div>
          <div className={styles.subImages}>
            <img
              src="https://images.pexels.com/photos/5877660/pexels-photo-5877660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Left View"
            />
            <img
              src="https://images.pexels.com/photos/5877660/pexels-photo-5877660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Right View"
            />
            <img
              src="https://images.pexels.com/photos/5877660/pexels-photo-5877660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=" On Ear"
            />
          </div>
        </div>

        <div className={styles.productInfo}>
          <h3>Sony WH-CH720N</h3>
          <div className={styles.review}>
            <span>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <span>(50 Customer reviews)</span>
          </div>
          <h4 className={styles.productPrice}>Price - &#8377;3,500</h4>
          <div className={styles.aboutItem}>
            <p>About this item</p>
            <ul>
              <li>360-degree sound for consistent and uniform coverage</li>
              <li>Water-Resistant design for outdoor use</li>
              <li>Portable and durable with up to 16 hours of playtime</li>
              <li>Portable and durable with up to 16 hours of playtime</li>
              <li>Portable and durable with up to 16 hours of playtime</li>
            </ul>
          </div>
          <div className={styles.availablity}>
            <h4>Available -&nbsp;</h4>
            <p> In stock</p>
          </div>

          <div className={styles.brand}>
            <h4>Brand -&nbsp;</h4>
            <p> Sony</p>
          </div>

          <div className={styles.actionButtons}>
            {IsLogIn ? (
              <button type="">Add to cart</button>
            ) : (
              <button type="">Login / Signup</button>
            )}

            <button type="">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
