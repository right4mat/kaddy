import React from "react";
//css imports
import classes from "./HeaderButton.module.css";

function HeaderButton(props) {
  return (
    <a className={classes.Button}>
      <i className={props.icon}></i>
    </a>
  );
}

export default HeaderButton;
