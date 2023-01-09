import React from "react";
import { Link } from "react-router-dom";

const Launch = ({launch}) => {
  return (
    <div>
      <img className="titulli" src={launch.links.mission_patch} alt={launch.mission_name} />
     <Link to={`/launches/${launch.id}`} >
      <h3 className="titulli">{launch.mission_name}</h3>
     </Link>
    </div>
  );
};
export default Launch;