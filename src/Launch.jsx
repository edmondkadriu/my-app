import React from "react";
const Launch = ({launch}) => {
  return (
    <div>
      <img className="titulli" src={launch.links.mission_patch} alt={launch.mission_name} />
      <h3 className="titulli">{launch.mission_name}</h3>
    </div>
  );
};
export default Launch;