import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import LaunchDetails from "./LaunchDetails";
import Launches from "./Launches";


export function App() {
  return (
    <Routes>
      <Route path="/" element={<Launches />} />
      <Route path="launches/:id" element={<LaunchDetails />}></Route>
    </Routes>
  );
}

export default App;