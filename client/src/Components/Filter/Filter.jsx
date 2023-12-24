import React from "react";
import { FaChevronDown } from "react-icons/fa";
import styles from "./Filter.module.css";
import { useState } from "react";

const Filter = ({ name }) => {
  const [ItemType, SetItemType] = useState("");
  const [Display, SetDisplay] = useState(false);
  const HandleDisplay = () => {
    SetDisplay(!Display);
  };
  return (
    <div className={styles.dropdownMenu}>
      <div onClick={HandleDisplay} className={styles.dropDownbtn}>
        <span> {name}</span>
        <FaChevronDown />
      </div>
      <div className={Display ? styles.dropdown : styles.hide}>
        <li>Featured</li>
        <li>On-ear Headphone</li>
        <li>Over-ear Headphone</li>
        <li>In-ear Headphone</li>
      </div>
    </div>
  );
};

export default Filter;
