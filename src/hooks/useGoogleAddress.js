import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API_KEY = 'AIzaSyCmK4FLloW_Noc0kAYY7Nx6bov6TGMAAWI';
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`;

  useEffect(async () => {
    const response = await axios(API);
    setMap(response.data.results[0].geometry.location)//accedemos a la longitud/latitud de la data
  }, []);

  return map;
}

export default useGoogleAddress;