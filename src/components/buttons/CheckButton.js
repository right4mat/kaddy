import React from "react";
import Context from '../../context/Context';
//css imports
import classes from "./CheckButton.module.css";

function CheckButton(props) {
  const{checked, setChecked} = React.useContext(Context);
  const[clicked, setClicked] = React.useState(false);
  const handleAddChecked = () =>{
    setChecked({...checked, [props.id]: 1})
    setClicked(!clicked)
  }
  return (
    <button className={classes.Button} onClick={()=>handleAddChecked()}>
      {props.text}
    </button>
  );
}

export default CheckButton;
