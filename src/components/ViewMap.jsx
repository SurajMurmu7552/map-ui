import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import LocationMarker from './LocationMarker';

function ViewMap() {
  return (
    <MapContainer className="ViewMap" center={[20.593683, 78.962883]} zoom={2}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
}

export default ViewMap;
