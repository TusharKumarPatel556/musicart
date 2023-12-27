import React from "react";
import { FaChevronDown } from "react-icons/fa";
import styles from "./Filter.module.css";
import { useState, useEffect } from "react";

const Filter = (props) => {
  const [Display, SetDisplay] = useState(false);
  const [list, setlist] = useState([]);

  useEffect(() => {
    setlist(props.list);
  }, [props.list]);

  const HandleDisplay = () => {
    SetDisplay(!Display);
  };
  function handleClick(e) {
    console.log(e.target.name);
  }
  return (
    <div className={styles.dropdownMenu}>
      <div onClick={HandleDisplay} className={styles.dropDownbtn}>
        <span> {props.name ? props.name : <>Sort by:Featured</>}</span>
        <FaChevronDown />
      </div>
      <div className={Display ? styles.dropdown : styles.hide}>
        {props.name ? (
          <ul>
            <li name="sort">Featured</li>
            <li
              onClick={(event) => handleClick(event)}
              name="sort"
              value="price,-1"
            >
              Price:Lowest
            </li>
            <li name="sort" value="price,1">
              Price:Highest
            </li>
            <li name="sort" value="name,1">
              Name:(A-Z)
            </li>
            <li name="sort" value="name,-1">
              Name:(Z-A)
            </li>
          </ul>
        ) : (
          <>
            {list
              ? list.map((item, index) => (
                  <li name={props.name.split(" ")[0]} key={index}>
                    {item}
                  </li>
                ))
              : "null"}
          </>
        )}
      </div>
    </div>
  );
};

export default Filter;
