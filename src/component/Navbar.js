import { useRef } from "react";
import "../App.css";

function NavBar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <nav className="navbar" ref={navRef}>
        <a href="/" className="logo">
          Sunset Matches
        </a>
        <div className="links">
          {/* <a className="link" href="/#">
            Home
          </a> */}
          <a className="link" href="/#">
            Concept
          </a>
          <a className="link" href="/#">
            Download
          </a>
          <a className="link" href="/#">
            Contact
          </a>
          <a href="donwload" id="btn" className="link">
            Join the Pilot
          </a>
        </div>
      </nav>
    </header>
  );
}
export default NavBar;
