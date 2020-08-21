import React from "react";
import {Link} from "react-router-dom";
import Context from '../../context/Context';
//css imports
import classes from "./Header.module.css";
//img imports
import logo from "../../assets/logo.png";
//comp imports
import HeaderButton from "../buttons/HeaderButton";
import SearchBar from "../searchBar/SearchBar";

function Header() {
  const{likeStatus, setFilter} = React.useContext(Context);
  let likeCount = 0;
  //get total checked items
  Object.keys(likeStatus).forEach(x=>{if(likeStatus[x].type)likeCount += likeStatus[x].type})
  return (
    <div className={classes.Header}>
      <div className={classes.Top}>
        <div className={classes.MenuLogo}>
          <Link to="/"><img src={logo} className={classes.HeaderLogo} alt="logo" /></Link>
        </div>
        <div className={classes.HeaderButtons}>
          <HeaderButton icon={"fas fa-heart"} to={'/favorites'} count={likeCount} />
        </div>
      </div>
      <div className={classes.Bottom}>
        <div className={classes.Types}>
          <div onClick={()=>{setFilter('popular')}} className={classes.Type}>latest</div>
          <div onClick={()=>{setFilter('oldest')}} className={classes.Type}>oldest</div>
          <div onClick={()=>{setFilter('latest')}} className={classes.Type}>popular</div>
        </div>
        <SearchBar/>
      </div>
    </div>
  );
}

export default Header;
