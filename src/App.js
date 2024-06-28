
import './App.css';
import React, { useEffect, useState } from "react";
// import weather from './components/weather';
export default function App() {

  const [lat, setLat] = useState([]);
  const [long, setLlong] = useState([]);
  const [data, setDate] = useState([]);
  
  useEffect(() => {
  const fetchData = async () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLlong(position.coords.longitude);
    });

    await fetch( 'https://api.openweathermap.org/data/2.5' )
    .then(res => res.json())
    .then(result => {
      setDate(result)
        console.log(result);
    });
  }
    fetchData();
  }, [lat, long]);

  return (
    <div className="App">
      {(typeof data.main != 'undefined') ? (
        <weather weatherData={data}/>
      ): (
       <div>welcome to my page</div>
      )}

    </div>
  );
}

