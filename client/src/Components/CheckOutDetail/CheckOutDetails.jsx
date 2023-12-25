import React from "react";
import styles from "./CheckOutDetails.module.css";
import OrderBtn from "../../Utils/OrderPLaceBtn/OrderBtn";
import ProductImg from "../../Utils/CartPrdctImg/ProductImg";

const CheckOutDetails = () => {
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
          <h4>
            <span>Items:</span>
            <span>&#8377;3500.00</span>
          </h4>
          <h4>
            <span>Delivery:</span>
            <span>&#8377;45.00</span>
          </h4>
        </div>
      </div>
      <div className={styles.checkoutRows}>
        <div>3. Review items and delivery</div>
        <div>
          <ProductImg />
          <div className={styles.delivery}>
            <h3>Sony WH-CH720N</h3>
            <p>Color-Black</p>
            <p>In Stock</p>
            <h4>Estimated delivery:Monday-FREE Standard Delivery</h4>
          </div>
        </div>
        <div className={styles.orderTotal}>
          <span>Order Total:</span> <span>&#8377;3545</span>
        </div>
      </div>

      <div className={styles.finalOrder}>
        <div>
          <OrderBtn name="Place your order" />
        </div>
        <div>
          <h4 className={styles.orderTotal}>Order Total : ₹3545.00</h4>
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
