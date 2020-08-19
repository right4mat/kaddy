import React from "react";
import {Link} from 'react-router-dom';
//css imports
import classes from "./HeaderButton.module.css";

function HeaderButton(props) {
  return (
    <Link to={props.to} className={classes.Button}>
      {props.count ? <div className={classes.Count}>{props.count}</div> : false}
      <i className={props.icon}></i>
    </Link>
  );
}

export default HeaderButton;
