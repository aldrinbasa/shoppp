import React from "react";
import mainButtonStyles from "./MainButton.module.css";
import profileStyles from "./../../profile/Profile.module.css";

const MainButton = (props) => {
  return (
    <button className={`${mainButtonStyles.button} ${profileStyles[props.customStyle]}`} onClick={props.onClick} type={props.type}>
      {props.children}
    </button>
  );
};

export default MainButton;
