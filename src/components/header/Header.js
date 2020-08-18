import React from "react";
//css imports
import classes from "./Header.module.css";
//img imports
import logo from "../../assets/logo.png";
//comp imports
import HeaderButton from "../buttons/HeaderButton";

function Header() {
  return (
    <div className={classes.Header}>
      <div className={classes.Top}>
        <div className={classes.MenuLogo}>
          <a className={classes.Menu}>
            <i className="fas fa-bars"></i>
          </a>
          <img src={logo} className={classes.HeaderLogo} />
        </div>
        <div className={classes.HeaderButtons}>
          <HeaderButton icon={"fas fa-map-marker"} />
          <HeaderButton icon={"fas fa-heart"} />
          <HeaderButton icon={"fas fa-shopping-cart"} />
        </div>
      </div>
      <div className={classes.Bottom}>
        <div className={classes.Types}>
          <a className={classes.Type}>SPIRITS</a>
          <a className={classes.Type}>WINE</a>
          <a className={classes.Type}>BEER</a>
        </div>
        <div className={classes.SearchContainer}>
          <input
            id="query"
            placeholder="Search shop..."
            className={classes.Input}
            value=""
          />
          <div className={classes.SearchIcon}>
            <i class="fas fa-search"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
