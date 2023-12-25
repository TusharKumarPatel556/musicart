import React from "react";
import styles from "./CartDetail.module.css";
import OrderBtn from "../../Utils/OrderPLaceBtn/OrderBtn";
import ProductImg from "../../Utils/CartPrdctImg/ProductImg";

const CartDetail = () => {
  return (
    <div>
      <div className={styles.cartDetail}>
        <div className={styles.priceDistribution}>
          <ProductImg />
          <div className={styles.purchaseInfo}>
            <div className={styles.cartProductname}>
              <h3>Sony WH-CH720N</h3>
              <p>Color:Black</p>
              <p>In Stock</p>
            </div>

            <div>
              <h3>Price</h3>
              <p>&#8377;3500</p>
            </div>

            <div>
              <h3>Quantity</h3>
              <select>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
              </select>
            </div>
            <div>
              <h3>Total</h3>
              <p>&#8377;3500</p>
            </div>

            <div className={styles.priceDetail}>
              <h3>PRICE DETAILS</h3>
              <p>
                <span>Total MRP</span> <span>&#8377;3500</span>
              </p>
              <p>
                <span>Discount on MRP</span> <span>&#8377;0</span>
              </p>
              <p>
                <span>Convenience Fee</span> <span>&#8377;45</span>
              </p>
            </div>
          </div>
          <div className={styles.purchaseInfoMobile}>
            <h3>Sony WH-CH720N</h3>

            <p className={styles.price}>&#8377;3500</p>
            <p>Colour - Black</p>
            <p>In Stock</p>
            <p>Convenience fee &nbsp;&nbsp;&#8377;45</p>
          </div>
        </div>
        <div className={styles.subtotal}>
          <h4 style={{ textAlign: "center", marginLeft: "150px" }}>1 Item</h4>
          <h4>&#8377;3500</h4>
          <h4>Total Amount</h4>
          <h4>&#8377;3545</h4>
        </div>

        <div className={styles.subtotalMobile}>
          <h4>
            <span>Total:</span> <span>&#8377;3545</span>
          </h4>
        </div>
        <div className={styles.placeOrder}>
          <OrderBtn name="PLACE ORDER" />
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
