import React from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>UberTheDash</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of food" />
      </div>
    </>
  );
};

export default Header;
