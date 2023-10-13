import React from "react";
import "../style/Activities.css";
import oneEighty from "../assets/picture/180hostel.jpg";
import laMer from "../assets/picture/lamer.jpeg";
import abrahamHostel from "../assets/picture/abrahamHostel.jpg";
import frishmanBeach from "../assets/picture/frishmanBeach.jpg";
import gazoz from "../assets/picture/gazoz.jpeg";
import paintingBeach from "../assets/picture/paintingBeach.webp";
export default function Activities() {
  return (
    <div className="activitiesContainer">
      <div className="textActivitiesContainer">
        <h1>Let's work together !</h1>
        <h1>Join our partner and become a dating place</h1>
      </div>

      <div className="imageActivitiesContainer">
        <img className="activities" src={oneEighty}></img>
        <img className="activities" src={laMer}></img>
        <img
          alt="abrahamHostel"
          className="activities"
          src={abrahamHostel}
        ></img>
        <img
          alt="abrahamHostel"
          className="activities"
          src={frishmanBeach}
        ></img>
        <img alt="abrahamHostel" className="activities" src={gazoz}></img>
        <img
          alt="abrahamHostel"
          className="activities"
          src={paintingBeach}
        ></img>
      </div>
    </div>
  );
}
