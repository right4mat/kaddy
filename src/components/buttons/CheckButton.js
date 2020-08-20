import React from "react";
//css imports
import classes from "./CheckButton.module.css";

function CheckButton(props) {

  return (
    <button className={classes.Button} onClick={()=>props.callback()}>
      {props.text}
    </button>
  );
}

export default CheckButton;
