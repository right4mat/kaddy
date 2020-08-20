import React, { useState } from "react";
import Context from "../../context/Context";
import { price } from "../../helpers/helpers";
//css imports
import classes from "./Product.module.css";
//comp imports
import FavoritesButton from "../buttons/FavoritesButton";
import CheckButton from "../buttons/CheckButton";
import ItemAmount from "../itemAmount/ItemAmount";

function Product(props) {
  const{checked, setChecked} = React.useContext(Context);
  const handleAddChecked = () =>{
    setChecked({...checked, [props.id]: 1})
  }
  return (
    <div className={classes.Product}>
      <img src={props.img} className={classes.ProductImg} />
      <div className={classes.Details}>
        <p>{props.brand}</p>
        <p className={classes.Detail}>{props.details}</p>
        <p className={classes.Price}>{'$'+price(props.details)}</p>
      </div>
      {checked[props.id] ? (
        <ItemAmount id={props.id} />
      ) : (
        <div className={classes.Buttons}>
          <FavoritesButton id={props.id} />
          <CheckButton id={props.id} text={"checkout"} callback={handleAddChecked} />
        </div>
      )}
    </div>
  );
}

export default Product;
