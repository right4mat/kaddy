import React from "react";
import {useHistory} from 'react-router-dom';
//css imports
import classes from "./SearchBar.module.css";

function SearchBar() {
  const[search, setSearch] = React.useState('')
  const history = useHistory()
  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      history.push("/search/Results/"+search)
    }
  }
  return (
    <div className={classes.SearchContainer}>
      <input
        id="query"
        placeholder="Search shop..."
        className={classes.Input}
        value={search}
        onChange={x=>setSearch(x.target.value)}
        onKeyDown={handleEnter}
      />
      <div className={classes.SearchIcon}>
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
}

export default SearchBar;
