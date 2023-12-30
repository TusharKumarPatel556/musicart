import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./CartDetail.module.css";
import OrderBtn from "../../Utils/OrderPLaceBtn/OrderBtn";
import ProductImg from "../../Utils/CartPrdctImg/ProductImg";
import { MusicContext } from "../../Context/Context";
import { GetCartItem } from "../../Api/UserApi/UserApi";
import { GetCartList } from "../../Api/UserApi/UserApi";

const CartDetail = () => {
  const { UserCart, SetUserCart, CartItems, SetCartItems, LoggedIn } =
    useContext(MusicContext);
  const [error, Seterror] = useState("");
  console.log("Cart Details  UserCart", UserCart);
  const Quant = [1, 2, 3, 4, 5, 6, 7, 8];
  const CartList = async (CartItems) => {
    const cartlist = await GetCartList();
    console.log("catlist", cartlist);
    if (cartlist.data.message == "success") {
      SetUserCart({ ...CartItems, ...cartlist.data.UserCart[0] });
    } else {
      Seterror("error");
    }
  };

  const CartData = async () => {
    const response = await GetCartItem(UserCart);
    console.log("All products you purchased", response);
    if (response.data.message == "success") {
      console.log("All products you purchased", response);
      SetCartItems(response.data.CartItem);
    } else {
      Seterror("error");
    }
  };

  useEffect(() => {
    CartData();
  }, []);

  // console.log("UserCart", UserCart);
  // console.log("SetUserCart", SetUserCart);
  // console.log("CartItems", CartItems);
  // console.log("SetCartItems", SetCartItems);

  const HandleSelect = (e, id) => {
    const quantity = e.target.value;

    SetUserCart({ ...UserCart, [id]: quantity });
  };

  // useEffect(() => {
  //   console.log("Cart Items", CartItems);
  // }, [CartItems]);

  useEffect(() => {
    CartList();
  }, []);

  return (
    <div>
      {!error ? (
        <>
          {CartItems.length != 0 ? (
            <>
              <div>
                <div className={styles.cartDetail}>
                  {CartItems.map((item, index) => (
                    <div key={index}>
                      <div className={styles.priceDistribution}>
                        <ProductImg img={item.img_url[0]} />
                        <div className={styles.purchaseInfo}>
                          <div className={styles.cartProductname}>
                            <h3>{item.product_name}</h3>
                            <p>Color:{item.color}</p>
                            <br />
                            <p>{item.availability}</p>
                          </div>

                          <div>
                            <h3>Price</h3>
                            <p>&#8377;{item.price}</p>
                          </div>

                          <div>
                            <h3>Quantity</h3>
                            <select
                              onChange={(event) =>
                                HandleSelect(event, item._id)
                              }
                              defaultValue={item.quantity}
                            >
                              {Quant.map((val, index) => (
                                <option key={index} value={val}>
                                  {val}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <h3>Total</h3>
                            <p>&#8377;{item.price * item.quantity}</p>
                          </div>

                          <div className={styles.priceDetail}>
                            <h3>PRICE DETAILS</h3>
                            <p>
                              <span>Total MRP</span>{" "}
                              <span>&#8377;{item.price * item.quantity}</span>
                            </p>
                            <p>
                              <span>Discount on MRP</span> <span>&#8377;0</span>
                            </p>
                            <p>
                              <span>Convenience Fee</span>{" "}
                              <span>&#8377;45</span>
                            </p>
                          </div>
                        </div>
                        <div className={styles.purchaseInfoMobile}>
                          <h3>{item.product_name}</h3>

                          <p className={styles.price}>&#8377;{item.price}</p>
                          <p>Colour - {item.color}</p>
                          <br />
                          <p>{item.availability}</p>
                          <p>Convenience fee &nbsp;&nbsp;&#8377;45</p>
                        </div>
                      </div>
                      <div className={styles.subtotal}>
                        <h4
                          style={{ textAlign: "center", marginLeft: "150px" }}
                        >
                          1 Item
                        </h4>
                        <h4>&#8377;{item.price}</h4>
                        <h4>Total Amount</h4>
                        <h4>
                          &#8377;{item.price * Number(item.quantity) + 45}
                        </h4>
                      </div>
                      <div className={styles.subtotalMobile}>
                        <h4>
                          <span>Total:</span>
                          <span>
                            &#8377;{item.price * Number(item.quantity) + 45}
                          </span>
                        </h4>
                      </div>
                    </div>
                  ))}
                  <NavLink to="/checkout">
                    <div className={styles.placeOrder}>
                      <OrderBtn name="PLACE ORDER" />
                    </div>
                  </NavLink>
                </div>
              </div>
            </>
          ) : (
            <div>Loading data</div>
          )}
        </>
      ) : (
        <div>{error}</div>
      )}
    </div>
  );
};

export default CartDetail;
