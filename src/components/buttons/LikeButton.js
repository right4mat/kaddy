import React from "react";
import Context from "../../context/Context";
//css imports
import classes from "./LikeButton.module.css";

function LikeButton(props) {
  const { likeStatus, setLikeStatus } = React.useContext(Context);
  const handleLikeStatus = () => {
    
    setLikeStatus({ ...likeStatus, [props.id]: {type:props.type, id:props.id} });
    
  };
  return (
    <div
      className={
        props.id in likeStatus ? (
        likeStatus[props.id].type === props.type
          ? `${classes.Clicked} ${classes.Button}`
          : classes.Button) :  classes.Button
      }
      onClick={() => handleLikeStatus()}
    >

    {
      props.type ?
      <i class="fas fa-thumbs-up"></i> : <i class="fas fa-thumbs-down"></i>
      }
    </div>
  );
}

export default LikeButton;
