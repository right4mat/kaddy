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
  return (
    <div className={classes.Header}>
      <div className={classes.Top}>
        <div className={classes.MenuLogo}>
          <a className={classes.Menu}>
            <i className="fas fa-bars"></i>
          </a>
          <Link to="/"><img src={logo} className={classes.HeaderLogo} /></Link>
        </div>
        <div className={classes.HeaderButtons}>
          <HeaderButton icon={"fas fa-map-marker"} to={'/locations'} />
          <HeaderButton icon={"fas fa-heart"} to={'/favorites'} count={Object.keys(favorites).length} />
          <HeaderButton icon={"fas fa-shopping-cart"} count={Object.keys(checked).length}/>
        </div>
      </div>
      <div className={classes.Bottom}>
        <div className={classes.Types}>
          <a className={classes.Type}>SPIRITS</a>
          <a className={classes.Type}>WINE</a>
          <a className={classes.Type}>BEER</a>
        </div>
        <SearchBar/>
      </div>
    </div>
  );
}

export default Header;
