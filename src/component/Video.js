import React, { useRef, useEffect } from "react";
import video from "../assets/picture/video.webm";
import "../style/Video.css";

import linkdin from "../assets/picture/linkedin.svg";
import tiktok from "../assets/picture/tiktok.svg";
import insta from "../assets/picture/insta.svg";
export default function Video() {
  const videoRef = useRef(null);
  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    };

    videoRef.current.addEventListener("loadedmetadata", playVideo);

    return () => {
      videoRef.current.removeEventListener("loadedmetadata", playVideo);
    };
  }, []);

  return (
    <div className="videoContainer">
      <div className="textContainer">
        {/* <h1 className="logo">Sunset Matches</h1> */}
        <h2 className="lines"> Matches someone ... </h2>
        <h2 className="lines"> Date someone</h2>
      </div>
      <div className="socialContainer">
        <a href="https://github.com/GuillaumeMaignan">
          <img className="iconTiny" src={tiktok} alt="tiktok"></img>
        </a>
        <a href="https://www.linkedin.com/in/guillaume-maignan-934985248/">
          <img className="iconTiny" src={linkdin} alt="linkdin"></img>
        </a>
        <a href="https://www.instagram.com/sunsetmatchesofficial/">
          <img className="iconTiny" src={insta} alt="instagram"></img>
        </a>
      </div>

      <video
        ref={videoRef}
        className="video"
        type="video/mp4"
        playsInline={true}
        muted={true}
        autoPlay={true}
        loop={true}
        src={video}
      />
    </div>
  );
}
