import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const API_KEY = "AIzaSyCmK4FLloW_Noc0kAYY7Nx6bov6TGMAAWI";

  const mapStyle = {
    height: "50vh",
    width: "100%"
  }

  const defaultCenter = {
    lat: 19.4267261,
    lng: -99.1718796
  }

  return (
    <LoadScript googleMapsApiKey={API_KEY} >
      <GoogleMap
        mapContainerStyle={mapStyle}
        zoom={9}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map


