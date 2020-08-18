import React from "react";
import mapboxgl from "mapbox-gl";
//css imports
import shared from "../sharedStyle/Style.module.css";
import classes from "./Map.module.css";
//comp imports

function Home() {
  const [mapState, setMapState] = React.useState({
    lng: 5,
    lat: 34,
    zoom: 2,
  });
  React.useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibHNkOTIiLCJhIjoiY2s4ZmppbTJ3MDR4dDNsb3o2bjFqd2QxbSJ9.yJtrEsVvvfFiPHA4ytn2Og';
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v10",
      center: [mapState.lng, mapState.lat],
      zoom: mapState.zoom,
    });
  }, []);
  return (
    <div className={shared.Page}>
      <div id="map" className={classes.map} />
    </div>
  );
}

export default Home;
