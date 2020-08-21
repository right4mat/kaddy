import React from "react";
import Context from "./Context";



export default function Provider(props) {
  const [likeStatus, setLikeStatus] = React.useState({});
  const [checked, setChecked] = React.useState({});
  const [fitler, setFilter] = React.useState('popular');



  return (
    <Context.Provider
      value={{
        likeStatus, setLikeStatus,
        checked, setChecked,
        fitler, setFilter
      }}
    >
      {props.children}
    </Context.Provider>
  );
}