import React from "react";
import "../style/contact.scss";
import Email from "../component/Email";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact_main">
      <div className="contact_whole">
        <section className="contact_home">
          <div className="contact_head">
            <h1>Contact Us</h1>
          </div>
          <div className="contact_sub">
            <p>staying ahead - our way of life</p>
          </div>
        </section>

        <section className="contact_links">
          <div className="contact_contact">
            <div className="contact_heading">
              <h1>Meet Us</h1>
            </div>
            <div className="contact_link_link">
              <ul>
                <li>
                  <FaPhone /> <span>08037270247, 08071771174</span>
                </li>
                <li>
                  <FaLocationDot />
                  <span>
                    41 STELLIAN ROAD, ELELENWO, PORT HARCOURT, RIVERS STATE.
                  </span>
                </li>
                <li>
                  <MdAlternateEmail /> <span>info@marinoilandgas.com.ng</span>
                </li>
              </ul>
            </div>
          </div>
          <Email />

          <div className="contact_google">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.595714169068!2d7.068793073720474!3d4.839268940443354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cd6a7a191403%3A0xd7329bbf94553a79!2s41%20Stellian%20Road%2C%20Elelenwo%2C%20Elelenwa%20500102%2C%20Rivers!5e0!3m2!1sen!2sng!4v1705095086633!5m2!1sen!2sng"
              width={600}
              height={450}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
