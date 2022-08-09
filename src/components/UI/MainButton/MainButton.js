import React from "react";
import mainButtonStyles from "./MainButton.module.css";

const MainButton = (props) => {
  const classes = props.classes + " " + mainButtonStyles.button;
  return (
    <button className={classes} onClick={props.onClick} type={props.type}>
      {props.children}
    </button>
  );
};

export default MainButton;
