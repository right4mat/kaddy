import React from "react";
import Context from "../../context/Context";
import { price } from "../../helpers/helpers";
//css imports
import classes from "./Product.module.css";
//comp imports
import LikeButton from "../buttons/LikeButton";
import CheckButton from "../buttons/CheckButton";
import ItemAmount from "../itemAmount/ItemAmount";

function Product(props) {
  const{checked, setChecked} = React.useContext(Context);
  const handleAddChecked = () =>{
    setChecked({...checked, [props.id]: 1})
  }
  return (
    <div className={classes.Product}>
      <img src={props.img} className={classes.ProductImg} alt={props.alt} />
      <div className={classes.Details}>
      </div>
      {checked[props.id] ? (
        <ItemAmount id={props.id} />
      ) : (
        <div className={classes.Buttons}>
          <LikeButton id={props.id} type={1} />
          <LikeButton id={props.id} type={0} />
        </div>
      )}
    </div>
  );
}

export default Product;
