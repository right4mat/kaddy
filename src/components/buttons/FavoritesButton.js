import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Context from '../../context/Context';
//css imports
import classes from "./FavoritesButton.module.css";

function FavoritesButton(props) {
  const{favorites, setFavorites} = React.useContext(Context);
  const[clicked, setClicked] = React.useState(props.checked);
  const handleAddFav = () =>{
    setFavorites({...favorites, [uuidv4()]: props.toAdd})
    setClicked(!clicked)
  }
  return (
    <a className={clicked ? `${classes.Clicked} ${classes.Button}`: classes.Button} onClick={()=>handleAddFav()}>
      <i className="far fa-heart"></i>
    </a>
  );
}

export default FavoritesButton;
