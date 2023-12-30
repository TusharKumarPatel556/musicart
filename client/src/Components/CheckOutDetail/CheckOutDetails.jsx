import React, { useContext, useEffect, useState } from "react";
import styles from "./CheckOutDetails.module.css";
import OrderBtn from "../../Utils/OrderPLaceBtn/OrderBtn";
import ProductImg from "../../Utils/CartPrdctImg/ProductImg";
import { MusicContext } from "../../Context/Context";

const CheckOutDetails = () => {
  const { UserCart, SetUserCart, CartItems, SetCartItems } =
    useContext(MusicContext);
  const [Total, SetTotal] = useState(0);
  let price = 0;

  useEffect(() => {
    CartItems.map((item, index) => {
      price = item.price * item.quantity + price;
      SetTotal(price);
    });
  });

  return (
    <div className={styles.checkOutdetail}>
      <div className={styles.checkoutRows}>
        <div>1. Delivery address</div>
        <div className={styles.userAddress}>
          Akash Patel 104 kk hh nagar, Lucknow Uttar Pradesh 226025
        </div>
        <div>
          <OrderBtn name="Place your order" />
          <div>
            <p>
              By placing your order, you agree to Musicart privacy notice and
              conditions of use.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.checkoutRows}>
        <div>2. Payment method</div>
        <div className={styles.paymentMethod}>Pay on delivery ( Cash/Card)</div>
        <div className={styles.orderSummery}>
          <h3>Order Summery</h3>

          {CartItems.map((item, index) => (
            <h4 key={index}>
              <span>{item.product_name}:</span>
              <span>&#8377;{item.price}</span>
            </h4>
          ))}

          <h4>
            <span>Delivery:</span>
            <span>&#8377;45.00</span>
          </h4>
        </div>
      </div>
      <div className={styles.checkoutRows}>
        <div>3. Review items and delivery</div>
        <div>
          {CartItems.map((item, index) => (
            <div key={index}>
              <ProductImg img={item.img_url[0]} />
              <div className={styles.delivery}>
                <h3>{item.product_name}</h3>
                <p>Color-{item.color}</p>
                <p>{item.availability}</p>
                <h4>Estimated delivery:Monday-FREE Standard Delivery</h4>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.orderTotal}>
          <span>Order Total:</span> <span>&#8377;{Total}</span>
        </div>
      </div>

      <div className={styles.finalOrder}>
        <div>
          <OrderBtn name="Place your order" />
        </div>
        <div>
          <h4 className={styles.orderTotal}>Order Total : ₹{Total}</h4>
          <p>
            By placing your order, you agree to Musicart privacy notice and
            conditions of use
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckOutDetails;
