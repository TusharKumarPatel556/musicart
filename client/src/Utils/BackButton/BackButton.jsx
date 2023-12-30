import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./BackButton.module.css";
import { FaArrowLeft } from "react-icons/fa6";

const BackButton = () => {
  const location = useLocation();

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div>
      <button className={styles.backButton} onClick={handleGoBack}>
        Go Back
      </button>
      <button className={styles.backArrow} onClick={handleGoBack}>
        <FaArrowLeft className={styles.backIcon} />
      </button>
    </div>
  );
};

export default BackButton;
