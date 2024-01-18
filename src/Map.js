import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMapEvents, Marker } from "react-leaflet";
import { useState, useContext } from "react";
import LongLatContext from "./LongLatContext";

const Map = () => {
  function LocationMarker() {
    const longLatState = useContext(LongLatContext);
    const [longLat, setLongLat] = longLatState;

    const map = useMapEvents({
      click(e) {
        setLongLat([e.latlng.lng, e.latlng.lat]);
      },
    });
  }

  return (
    <MapContainer
      className="map"
      center={{ lat: 51.505, lng: -0.09 }}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default Map;
