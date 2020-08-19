import React from "react";
import Context from "../../context/Context";
//css imports
import classes from "./ItemAmount.module.css";

function ItemAmount(props) {
  const { checked, setChecked } = React.useContext(Context);
  return (
    <div className={classes.ItemAmount}>
      <a className={classes.Button} onClick={()=>setChecked({...checked, [props.id]: checked[props.id]-1})} >
        <i className="fas fa-minus-circle"></i>
      </a>
      <div className={classes.Number}>{checked[props.id]}</div>
      <a className={classes.Button} onClick={()=>setChecked({...checked, [props.id]: checked[props.id]+1})}>
        <i className="fas fa-plus-circle"></i>
      </a>
    </div>
  );
}

export default ItemAmount;
