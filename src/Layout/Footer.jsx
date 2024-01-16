import React from "react";
import { Link } from "react-router-dom";
import "../style/footer.scss";
import real from "../assets/real logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { TbWorldCancel } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io5";
import { FaTwitter, FaLinkedinIn, FaFacebook, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col" id="company">
            <div className="log">
              <div className="head">
                <img src={real} alt="logo" className="footer_logo" />
                <h2 className="head_text">Marin Oil & Gas</h2>
              </div>
              <p id="sub_text">Staying ahead - our way of life</p>
            </div>

            <div className="social">
              <p>
                <FaFacebook />
              </p>
              <p>
                <IoLogoInstagram />
              </p>
              <p>
                <IoLogoYoutube />
              </p>
              <p>
                <FaTwitter />
              </p>
              <p>
                <FaLinkedinIn />
              </p>
            </div>
          </div>

          <div className="col" id="services">
            <h3>Navigation</h3>
            <div className="links">
              <Link className="links_serve" to="/">
                Home
              </Link>
              <Link className="links_serve" to="about">
                About
              </Link>
              <Link className="links_serve" to="services">
                Service
              </Link>
              <Link className="links_serve" to="contact">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="col" id="useful-links">
            <h3>Contact Info</h3>
            <div className="links">
              <p>
                <FaLocationDot />
                41 STELLIAN ROAD, ELELENWO, PORT HARCOURT, RIVERS STATE.
              </p>
              <p>
                <FaPhone />
                08037270247, 08071771174
              </p>
              <p>
                <CiMail />
                info@marinoilandgas.com.ng
              </p>
              <p>
                <TbWorldCancel />
                www.marinoilandgas.com.ng
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
