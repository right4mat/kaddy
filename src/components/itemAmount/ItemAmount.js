import React from "react";
import Context from "../../context/Context";
//css imports
import classes from "./ItemAmount.module.css";

function ItemAmount(props) {
  const { checked, setChecked } = React.useContext(Context);
  return (
    <div className={classes.ItemAmount}>
      <div className={classes.Button} onClick={()=>setChecked({...checked, [props.id]: checked[props.id]-1})} >
        <i className="fas fa-minus-circle"></i>
      </div>
      <div className={classes.Number}>{checked[props.id]}</div>
      <div className={classes.Button} onClick={()=>setChecked({...checked, [props.id]: checked[props.id]+1})}>
        <i className="fas fa-plus-circle"></i>
      </div>
    </div>
  );
}

export default ItemAmount;
