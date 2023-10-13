import React from "react";
import "../style/Concept.css";
import downloadButton from "../assets/picture/soonApple.png";
import googleButton from "../assets/picture/soonGoogle.png";

import juliaswipe from "../assets/picture/juliaswipe.svg";
export default function Concept() {
  return (
    <div className="conceptContainer">
      <div className="imageContainer">
        <img className="swipe" alt="swipeexemple" src={juliaswipe}></img>
      </div>
      <div className="text">
        <h1>Swipe and Matches someone, Met directly in the sunset </h1>
        <h1 className="complementText">
          Have an amazing date with one of our partner
        </h1>
        <div className="buttonContainer">
          <a href="apple.com">
            <img
              className="buttonDownload"
              alt="applebutton"
              src={downloadButton}
            ></img>
          </a>
          <a href="google.com">
            <img
              className="buttonDownload"
              alt="googlebutton"
              src={googleButton}
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}
