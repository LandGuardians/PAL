import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJja2p6amUzNjIwMWxzMnZxbHdpajR5dHZiIn0.Wc0y7Kz2wCQ7uQaW0NhdnA";

export default function Map() {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/satellite-v9",
      center: [-77.3963, 25.6285],
      zoom: 15
    });

    map.on("load", () => {
      console.log("Map loaded");
    });

    return () => map.remove();
  }, []);

  return (
    <div style={{ height: "80vh", width: "100%", border: "1px solid #ccc" }} ref={mapContainer} />
  );
}
