import React from "react";
import Slider from "react-slick";
import styles from "./Carousel.module.css";

function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings} className={styles.carousel}>
        <div className={styles.carouselItem}>
          <img
            src="https://images.pexels.com/photos/5877660/pexels-photo-5877660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Product Name"
          />
        </div>
        <div className={styles.carouselItem}>
          <img
            src="https://images.pexels.com/photos/5877660/pexels-photo-5877660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Product Name"
          />
        </div>
        <div className={styles.carouselItem}>
          <img
            src="https://images.pexels.com/photos/5877660/pexels-photo-5877660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Product Name"
          />
        </div>
        <div className={styles.carouselItem}>
          <img
            src="https://images.pexels.com/photos/5877660/pexels-photo-5877660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Product Name"
          />
        </div>
      </Slider>
    </div>
  );
}
export default Carousel;
