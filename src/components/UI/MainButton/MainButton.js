import React from "react";
import mainButtonStyles from "./MainButton.module.css";
import profileStyles from "./../../profile/Profile.module.css";
import cartStyles from "./../../cart/Cart.module.css";

const MainButton = (props) => {
  return (
    <button className={`${mainButtonStyles.button} ${profileStyles[props.customStyle]} ${cartStyles[props.customStyle]}`} onClick={props.onClick} type={props.type}>
      {props.children}
    </button>
  );
};

export default MainButton;
