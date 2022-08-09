import React from "react";
import navBarStyles from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <div className={navBarStyles.nav_bar}>
      <div className={navBarStyles.table}>
        <ul>
          <li>
            <button>Home</button>
          </li>
          <li>
            <button>Shoppp</button>
          </li>
          <li>
            <button>Profile</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
