import React from "react";
import styles from "./AboutPage.module.css";
import { NavLink, useLocation } from "react-router-dom";
import ViewCartBtn from "../ViewCartBtn/ViewCartBtn";
import { MusicContext } from "../../Context/Context";
import { useContext } from "react";

const AboutPage = () => {
  const { LoggedIn } = useContext(MusicContext);
  const { PageName, SetPageName } = useContext(MusicContext);
  return (
    <div className={styles.aboutPage}>
      <div className={styles.pageName}>
        <img src="/images/logo.png" alt="Logo" /> <h5>Home{PageName}</h5>
      </div>
      <NavLink to="/usercart"> {LoggedIn ? <ViewCartBtn /> : null}</NavLink>
    </div>
  );
};

export default AboutPage;
