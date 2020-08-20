import React from "react";
import { useHistory } from "react-router-dom";
//css imports
import classes from "./BackButton.module.css";

function BackButton(props) {
    const history = useHistory()
  return (
    <button className={classes.Button} onClick={() => history.goBack()}>
      {props.text}
    </button>
  );
}

export default BackButton;
