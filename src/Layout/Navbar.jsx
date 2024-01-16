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
        <img src={real} width={50} alt="logo" />
        <h2 className="logo_name">Marin Oil & Gas</h2>
      </div>

      <nav ref={navRef}>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="services">Service</Link>
        <Link to="contact" className="boom">
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
