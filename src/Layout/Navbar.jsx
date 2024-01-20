import ReACT, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { real } from "../constant/images";
import "../style/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div className="header_logo">
        <img className="images_logo" src={real} width={50} alt="logo" />
        <h2 className="logo_name">Marin Oil & Gas</h2>
      </div>

      <nav ref={navRef}>
        <Link to="/" onClick={showNavbar}>
          Home
        </Link>
        <Link to="about" onClick={showNavbar}>
          About
        </Link>
        <Link to="services" onClick={showNavbar}>
          Service
        </Link>
        <Link to="contact" onClick={showNavbar} className="boom">
          Book an Appointment
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
