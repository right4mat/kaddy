import React from "react";
//css imports
import classes from "../sharedStyle/Style.module.css";
import fourStyle from "./404.module.css";
//comp imports

function FourZeroFour() {
  return (
    <div className={classes.Page}>
      <div className={classes.Inner}>
        <div>
          <h1>404</h1>
          <h3>nothing here...</h3>
        </div>
      </div>
    </div>
  );
}

export default FourZeroFour;
