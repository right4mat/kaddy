import React from "react";
//css imports
import classes from "./LightButton.module.css";

function LightButton(props) {
  return (
    <a className={classes.Button} onClick={()=>props.callBack()}>
      {props.text}
    </a>
  );
}

export default LightButton;
