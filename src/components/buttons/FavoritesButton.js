import React from "react";
//css imports
import classes from "./FavoritesButton.module.css";

function FavoritesButton(props) {
    const[clicked, setClicked] = React.useState(false);
  return (
    <a className={clicked ? `${classes.Clicked} ${classes.Button}`: classes.Button} onClick={()=>setClicked(!clicked)}>
      <i className="far fa-heart"></i>
    </a>
  );
}

export default FavoritesButton;
