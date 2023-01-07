import React from "react";
const Launch = ({launch}) => {
  return (
    <div>
      <img src={launch.links.mission_patch} alt={launch.mission_name} />
      <h3>{launch.mission_name}</h3>
    </div>
  );
};
export default Launch;