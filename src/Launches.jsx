import React, { useEffect, useState } from "react";
import './App.css';
import Launch from "./Launch";


export function Launches() {
  
  const url ="http://localhost:8000/launches";
  const [popular, setPopular] = useState([]);
  useEffect(() => { fetchPopular();},[]);

  const fetchPopular = async () => {
    const data = await fetch(url);
    const launches = await data.json();
    console.log(launches);
    setPopular(launches);
  };

  return (
    <div className="App">
      <div className="main"></div>
      <h1 className="titulli">SPACEX LAUNCHES</h1>
      <br></br>
      <br></br>
      <div className="popular-launches">
        {popular.map((launch) => {
          return <Launch key={launch.id} launch={launch} />;
        })} 
      </div>
    </div>
  );
}

export default Launches;