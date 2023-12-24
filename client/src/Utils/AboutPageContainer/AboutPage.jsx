import React from "react";
import styles from "./AboutPage.module.css";
import ViewCartBtn from "../ViewCartBtn/ViewCartBtn";

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.pageName}>
        <img src="/images/logo.png" alt="Logo" /> <h5>Home</h5>
      </div>
      <ViewCartBtn />
    </div>
  );
};

export default AboutPage;
