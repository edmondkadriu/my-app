import React, { useEffect, useState } from "react";
import Launch from "./Launch";
import './App.css';

export function App() {
  
  const url ="https://api.spacexdata.com/v3/launches";
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
      <h1>Launches</h1>
      <div className="popular-launches">
      {popular.map((launch) => {
          return <Launch key={launch.mission_name} launch={launch} />;
        })}
      </div>
    </div>
  );
}

export default App;