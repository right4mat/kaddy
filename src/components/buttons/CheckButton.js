import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Context from '../../context/Context';
//css imports
import classes from "./CheckButton.module.css";

function CheckButton(props) {
  const{checked, setChecked} = React.useContext(Context);
  const[clicked, setClicked] = React.useState(false);
  const handleAddChecked = () =>{
    setChecked({...checked, [uuidv4()]: props.toCheck})
    setClicked(!clicked)
  }
  return (
    <a className={classes.Button} onClick={()=>handleAddChecked()}>
      {props.text}
    </a>
  );
}

export default CheckButton;
