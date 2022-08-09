import React from "react";
import navBarStyles from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <div className={navBarStyles.nav_bar}>
      <div className={navBarStyles.table}>
        <ul>
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#">Shoppp</a>
          </li>
          <li>
            <a href="/#">Profile</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
