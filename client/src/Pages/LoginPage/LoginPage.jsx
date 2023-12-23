import React from "react";
import Login from "../../Components/Login/Login";
import LogoContainer from "../../Utils/LogoContainer/LogoContainer";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <LogoContainer />
      <Login />

      <div className={styles.newtoCart}>
        <div>
          <h5>New to MusicCart?</h5>
        </div>
      </div>
      <div className={styles.createAcount}>
        <h5>Create Your Musicart account</h5>
      </div>
    </div>
  );
};

export default LoginPage;
