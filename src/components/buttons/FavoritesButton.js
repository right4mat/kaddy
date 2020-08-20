import React from "react";
import Context from "../../context/Context";
//css imports
import classes from "./FavoritesButton.module.css";

function FavoritesButton(props) {
  const { favorites, setFavorites } = React.useContext(Context);
  const handleAddFav = () => {
    if (props.id in favorites) {
      setFavorites((prevData) => {
        const newData = { ...prevData };
        delete newData[props.id];
        return newData;
      });
    } else {
      //we could store props here rather then just id. (save a network call)
      //however just becuase a product was listed before doesnt
      //mean it exists now, thus we will use this to call unsplash on fav page
      setFavorites({ ...favorites, [props.id]: props.id });
    }
  };
  return (
    <div
      className={
        props.id in favorites
          ? `${classes.Clicked} ${classes.Button}`
          : classes.Button
      }
      onClick={() => handleAddFav()}
    >
      <i className="far fa-heart"></i>
    </div>
  );
}

export default FavoritesButton;
