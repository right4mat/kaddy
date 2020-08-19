import React from "react";
//css imports
import classes from "./SearchBar.module.css";

function SearchBar() {
  return (
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
  );
}

export default SearchBar;
