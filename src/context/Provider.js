import React from "react";
import Context from "./Context";



export default function Provider(props) {
  const [favorites, setFavorites] = React.useState({});
  const [checked, setChecked] = React.useState({});
  const [search, setSearch] = React.useState('');



  return (
    <Context.Provider
      value={{
        favorites, setFavorites,
        checked, setChecked,
        search, setSearch
      }}
    >
      {props.children}
    </Context.Provider>
  );
}