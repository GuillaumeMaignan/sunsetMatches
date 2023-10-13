import React from "react";
import "../style/Feature.css";

import activities from "../assets/picture/activitiessvg.svg";
export default function Feature() {
  return (
    <div className="container">
      {/* <div className="textContain">
        <h1>Feature</h1>
      </div> */}

      <div className="imageContainer">
        <div>
          <h2>Meet your date</h2>
          <img className="feature" src={activities}></img>
        </div>
        <div>
          <h2>Book an activities together</h2>
          <img className="feature" src={activities}></img>
        </div>
        <div>
          <h2> Have fun !</h2>
          <img className="feature" src={activities}></img>
        </div>
      </div>
    </div>
  );
}
