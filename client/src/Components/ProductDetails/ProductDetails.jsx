import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import { FaStar } from "react-icons/fa6";
import Carousel from "../Carousel/Carousel";
import { ProductInfo } from "../../Api/ProductApi/ProductApi";
import { MusicContext } from "../../Context/Context";

const ProductDetails = () => {
  const [Product, SetProduct] = useState({});
  const { ProductId } = useParams();
  const { LoggedIn, SetLoggedIn } = useContext(MusicContext);
  const Navigate = useNavigate();
  const { UserCart, SetUserCart } = useContext(MusicContext);
  const [error, Seterror] = useState("");

  console.log("Product Details   LoggedIn", LoggedIn);

  const GetDetails = async (ProductId) => {
    const response = await ProductInfo(ProductId);

    if (response.message == "success") {
      SetProduct(response.products[0]);
    } else {
      Seterror("Failed to get data");
    }
  };

  const AddItem = () => {
    let quantity = 1;
    if (UserCart[ProductId]) {
      quantity = Number(UserCart[ProductId]) + 1;
    }
    SetUserCart({ ...UserCart, [ProductId]: quantity });
    return "added";
  };

  const AddtoCart = async (action) => {
    if ("add") {
      let quantity = 1;
      if (UserCart[ProductId]) {
        quantity = Number(UserCart[ProductId]) + 1;
      }
      SetUserCart({ ...UserCart, [ProductId]: quantity });
    } else {
      const resp = AddItem();
      if (resp == "added") {
        Navigate("/usercart");
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      SetLoggedIn(true);
    }

    GetDetails(ProductId);
  }, []);

  return (
    <div>
      {!error ? (
        <>
          <div className={styles.productDetails}>
            <p className={styles.productDescription}>
              {Product ? Product.description : "Description Not Available"}
            </p>
            <div className={` ${styles.mobBuybtn} `}>
              <NavLink to={LoggedIn ? "/usercart" : "/login"}>
                <button className={`${styles.mobBuy}`} type="">
                  Buy Now
                </button>
              </NavLink>
            </div>
            <div className={styles.detail}>
              <div className={styles.slider}>
                {Product ? (
                  <>
                    {Product.img_url ? (
                      <Carousel images={Product.img_url} />
                    ) : null}
                  </>
                ) : null}
              </div>
              <div className={styles.imageContainer}>
                <div className={styles.mainImage}>
                  <img
                    src={Product.img_url ? Product.img_url[0] : null}
                    alt="Product Name"
                  />
                </div>
                <div className={styles.subImages}>
                  <img
                    src={Product.img_url ? Product.img_url[1] : null}
                    alt="Left View"
                  />
                  <img
                    src={Product.img_url ? Product.img_url[2] : null}
                    alt="Right View"
                  />
                  <img
                    src={Product.img_url ? Product.img_url[3] : null}
                    alt=" On Ear"
                  />
                </div>
              </div>

              <div className={styles.productInfo}>
                <h3 className={styles.productName}>
                  {Product.product_name
                    ? Product.product_name
                    : "Name Not Available"}
                </h3>
                <div className={styles.review}>
                  <span>
                    <FaStar className={styles.star} />
                    <FaStar className={styles.star} />
                    <FaStar className={styles.star} />
                    <FaStar className={styles.star} />
                    <FaStar className={styles.star} />
                  </span>
                  <span>(50 Customer reviews)</span>
                </div>
                <p className={styles.mobileproductDescription}>
                  {Product ? Product.description : "Description Not Available"}
                </p>
                <h4 className={styles.productPrice}>
                  Price - &#8377;
                  {Product.price}
                </h4>
                <div className={styles.aboutItem}>
                  <p>About this item</p>
                  <ul className={styles.featuresofItem}>
                    {Product.features ? (
                      <>
                        {Product.features.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </>
                    ) : (
                      "features not available"
                    )}
                  </ul>
                </div>
                <div className={styles.availablity}>
                  <h4>Available -&nbsp;</h4>
                  <p>
                    {Product.availability
                      ? Product.availability
                      : "Out of Stock"}
                  </p>
                </div>

                <div className={styles.brand}>
                  <h4>Brand -&nbsp;</h4>
                  <p> {Product.brand ? Product.brand : "Out of Stock"}</p>
                </div>

                <div className={styles.actionButtons}>
                  {LoggedIn ? (
                    <button onClick={() => AddtoCart("add")} type="">
                      Add to cart
                    </button>
                  ) : (
                    <NavLink to="/login">
                      <button type="">Login / Signup</button>
                    </NavLink>
                  )}
                  <NavLink
                    onClick={() => AddtoCart("buy")}
                    to={LoggedIn ? "/usercart" : "/login"}
                  >
                    <button type="">Buy Now</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>{error}</div>
      )}
    </div>
  );
};

export default ProductDetails;
