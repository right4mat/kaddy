import React from "react";
import mapboxgl from "mapbox-gl";
//css imports
import shared from "../sharedStyle/Style.module.css";
import classes from "./Map.module.css";
//comp imports

function Map() {
  const [mapState, setMapState] = React.useState({
    lng: 151.20732,
    lat: -33.86785,
    zoom: 11,
  });

  React.useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibHNkOTIiLCJhIjoiY2s4ZmppbTJ3MDR4dDNsb3o2bjFqd2QxbSJ9.yJtrEsVvvfFiPHA4ytn2Og";

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v10",
      center: [mapState.lng, mapState.lat],
      zoom: mapState.zoom,
    });

    map.on("load", function () {
      map.addSource("locations", {
        type: "geojson",
        data: require("./model/locations.json"),
      });
      map.addLayer({
        id: "locations",
        type: "circle",
        source: "locations",
        layout: {},
        paint: {
          "circle-radius": 10,
          "circle-color": "#7f2f86",
          "circle-stroke-color": "#fff",
          "circle-stroke-width": 5,
        },
      });

      map.on("click", "locations", function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description =
          e.features[0].properties.name +
          "<br/>" +
          e.features[0].properties.open;
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(map);
      });

      map.on("mouseenter", "places", function () {
        map.getCanvas().style.cursor = "pointer";
      });

      map.on("mouseleave", "places", function () {
        map.getCanvas().style.cursor = "";
      });
    });
  }, []);
  return (
    <div className={shared.Page}>
      <div id="map" className={classes.map} />
    </div>
  );
}

export default Map;
