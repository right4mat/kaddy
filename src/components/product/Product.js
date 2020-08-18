import React from "react";
//css imports
import classes from "./Product.module.css";
//comp imports
import LightButton from "../buttons/LightButton";
import FavoritesButton from "../buttons/FavoritesButton";

function Product(props) {
  return (
    <a className={classes.Product}>
      <img src={props.img} className={classes.ProductImg} />
      <div className={classes.Details}>
        <p>{props.brand}</p>
        <p className={classes.Detail}>{props.details}</p>
        <p className={classes.Price}>{props.price}</p>
      </div>
      <div className={classes.Buttons}>
        <FavoritesButton />
        <LightButton text={"checkout"} />
      </div>
    </a>
  );
}

export default Product;
