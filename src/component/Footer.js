import React from "react";
import "../style/Footer.css";

import mail from "../assets/picture/mail.svg";
import linkdin from "../assets/picture/linkedin.svg";
import tiktok from "../assets/picture/tiktok.svg";
import insta from "../assets/picture/insta.svg";
import twitter from "../assets/picture/twitter.svg";
import whatsapp from "../assets/picture/whatsappsvg.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h2>Contact</h2>
          <div className="linkContainer">
            <a className="footerLink" href="mailto:guillaume1507@hotmail.com">
              <img className="icon" src={mail} alt="mail"></img> Email
            </a>
            <a
              className="footerLink"
              href="https://www.linkedin.com/in/guillaume-maignan-934985248/"
            >
              <img className="icon" src={linkdin} alt="linkdin"></img> Linkedin
            </a>
            <a
              className="footerLink"
              href="https://wa.me/+33623219644?text=Hi%20,i%20need%20a%20devs%20😀"
            >
              <img className="icon" src={whatsapp} alt="whatsapp"></img>
              Whatsapp
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h2>Social</h2>
          <div className="linkContainer">
            <a
              className="footerLink"
              href="https://github.com/GuillaumeMaignan"
            >
              <img className="icon" src={tiktok} alt="tiktok"></img>
              Tiktok
            </a>
            <a
              className="footerLink"
              href="https://www.instagram.com/sunsetmatchesofficial/"
            >
              <img className="icon" src={insta} alt="instagram"></img> Instagram
            </a>
            <a
              className="footerLink"
              href="https://github.com/GuillaumeMaignan"
            >
              <img className="icon" src={twitter} alt="gitHub"></img> Twitter/X
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h2>Légal</h2>
          <div className="linkContainer">
            <a className="footerLink" href="lien-vers-terms-and-conditions">
              Termes et Conditions
            </a>
            <p>&copy; 2023 Sunset Matches. All right reserved.</p>
            <p>Licence: Copyright </p>
          </div>
        </div>
      </div>
      <a
        className="reference"
        href="https://guillaumemaignan.github.io/guillaumeMaignan/"
      >
        Powered by guillaume maignan
      </a>
    </footer>
  );
}
