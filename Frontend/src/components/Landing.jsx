import React from "react";
import './Landing.css'
import { Link } from "react-router-dom";
import nube from "../img/nube.png";
import sol from "../img/sol.png";

const Landing = () => {
  return (
    <div>
      <h1>Weather App</h1>
        <p className="textoInicio"> Tu plataforma para consultar el clima en línea </p>
      <Link to="/home">
        <button className="landingBoton">Bienvenido</button>
      </Link>
      <div className="imgContainer">
        <img src={nube} alt="nube" className="nube"></img>
        <img src={sol} alt="sol" className="sol"></img>
        <img src={nube} alt="nube" className="nube"></img>
      </div>
    </div>
  );
};

export default Landing