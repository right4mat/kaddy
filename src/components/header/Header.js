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
  const{favorites, checked} = React.useContext(Context);
  let favCount  = Object.keys(favorites).length;
  let checkCount = 0;
  //get total checked items
  Object.keys(checked).forEach(x=>checkCount += checked[x])
  return (
    <div className={classes.Header}>
      <div className={classes.Top}>
        <div className={classes.MenuLogo}>
          <Link to="/"><img src={logo} className={classes.HeaderLogo} alt="logo" /></Link>
        </div>
        <div className={classes.HeaderButtons}>
          <HeaderButton icon={"fas fa-map-marker"} to={'/locations'} />
          <HeaderButton icon={"fas fa-heart"} to={'/favorites'} count={favCount} />
          <HeaderButton icon={"fas fa-shopping-cart"} to={'/checkout'} count={checkCount}/>
        </div>
      </div>
      <div className={classes.Bottom}>
        <div className={classes.Types}>
          <Link to='/search/Spirits/liqueur' className={classes.Type}>SPIRITS</Link>
          <Link to='/search/Wine/wine' className={classes.Type}>WINE</Link>
          <Link to='/search/Beer/beer' className={classes.Type}>BEER</Link>
        </div>
        <SearchBar/>
      </div>
    </div>
  );
}

export default Header;
