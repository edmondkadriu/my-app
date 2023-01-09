import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



const LaunchDetails = () => {
  // const [launch, setLaunch] = useState({});
  const params = useParams();

  // useEffect(() =>{
  //   console.log(params);
  //   const getLaunch = async () => {
  //     const result = await fetch(`http://localhost:8000/launches/${params.id}`);
  //     const data = await result.json();

  //     setLaunch(data);
  //   }
  //     getLaunch();
  // },[]);


  
  const [popular, setPopular] = useState([]);
  useEffect(() => { fetchPopular();},[]);

  const fetchPopular = async () => {
    const data = await fetch(`http://localhost:8000/launches/${params.id}`);
    const launches = await data.json();
    console.log(launches);
    setPopular(launches);
  };
  
  return(
    
    <div>
      <div className="main"></div>
      <h1 className="titulli">{popular.mission_name} Details</h1>
      <div className="card">
        <div className="card__image">
          
            <img className="titulli" src={popular?.links?.mission_patch} />
          
        </div>
        <div className="card__copy">
            <h1>{popular.mission_name}</h1>
            <h2>{popular.launch_date_local}</h2>
          <p>
             <b>Launch Site:</b> {popular?.launch_site?.site_name_long} 
            <br></br><br></br>
            <b>Rocket Name:</b> {popular?.rocket?.rocket_name} 
             <br></br><br></br>
             <b>Details: </b> {popular.details}
             <br></br><br></br>
             <a href={popular?.links?.article_link}>View article</a>
          </p>
        </div>
  </div>


    </div>
  );
};

export default LaunchDetails;