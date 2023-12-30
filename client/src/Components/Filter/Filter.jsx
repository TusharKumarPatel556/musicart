import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import { MusicContext } from "../../Context/Context";
import styles from "./Filter.module.css";

const Filter = (props) => {
  const [Display, SetDisplay] = useState(false);
  const [list, setlist] = useState([]);
  const { Filters, SetFilters } = useContext(MusicContext);

  useEffect(() => {
    setlist(props.list);
  }, [props.list]);

  const HandleDisplay = () => {
    SetDisplay(!Display);
  };
  const HandleClick = (e) => {
    const Value = e.target.getAttribute("value");
    const Name = e.target.getAttribute("name");
    SetFilters({ ...Filters, [Name]: Value });
  };
  return (
    <div className={styles.dropdownMenu}>
      <div onClick={HandleDisplay} className={styles.dropDownbtn}>
        <span> {props.name ? props.name : <>Sort by:Featured</>}</span>
        <FaChevronDown />
      </div>
      <div className={Display ? styles.dropdown : styles.hide}>
        {props.name ? (
          <div>
            {list
              ? list.map((item, index) => (
                  <li
                    onClick={(event) => HandleClick(event)}
                    name={props.name.split(" ")[0]}
                    key={index}
                    value={item}
                  >
                    {item}
                  </li>
                ))
              : "null"}
          </div>
        ) : (
          <ul>
            <li
              id="fet"
              onClick={(event) => HandleClick(event)}
              value=""
              name="Sort"
            >
              Featured
            </li>
            <li
              name="Sort"
              onClick={(event) => HandleClick(event)}
              value="price,-1"
            >
              Price:Lowest
            </li>
            <li
              name="Sort"
              onClick={(event) => HandleClick(event)}
              value="price,1"
            >
              Price:Highest
            </li>
            <li
              onClick={(event) => HandleClick(event)}
              name="Sort"
              value="name,1"
            >
              Name:(A-Z)
            </li>
            <li
              onClick={(event) => HandleClick(event)}
              name="Sort"
              value="name,-1"
            >
              Name:(Z-A)
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Filter;
