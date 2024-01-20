import React from "react";
import { Link } from "react-router-dom";
import Email from "../component/Email";
import "../style/Home.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  consultant,
  ship1,
  ship2,
  ship3,
  ship4,
  oil,
  cargo,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  real,
} from "../constant/images";

const Home = () => {
  return (
    <div className="Home_main">
      <section className="hero">
        <div className="lettering">
          <div className="lagos">
            <img src={real} alt="real" />
            <p>Marin Oil & Gas</p>
          </div>
          <div className="first_column">
            <h2> consultancy & surveying services</h2>
          </div>
          <div className="second_column">
            <p>
              Providing marine and engineering consultancy and surveying
              services to the shipping and offshore industries
            </p>
          </div>
          <div className="third_column">
            <Link className="appointment" to="contact">
              Book an appointment
            </Link>
          </div>
        </div>
        {/* <div className="imaging">
          <img src={ship2} alt="typewriter" />
        </div> */}
      </section>

      <section className="columns_box">
        <div className="columns">
          <div className="first_col">
            <span></span>
            <p>OUR WORD, OUR BOND</p>
          </div>
          <div className="second_col">
            <span></span>
            <p>WE COLLABORATE</p>
          </div>
          <div className="third_col">
            <span></span>
            <p>WE RESPECT</p>
          </div>
        </div>
      </section>

      <section className="offer">
        {/* <div className="imaging">
          <img src={ship4} alt="paper" />
        </div> */}
        <div className="offer_lettering">
          <div className="content_one">
            <h3>
              STAYING AHEAD – <span>OUR WAY OF LIFE</span>.
            </h3>
          </div>
          <div className="content_two">
            <h4> Providing innovative and sustainable maritime solutions</h4>
          </div>
          <div className="content_three">
            <ul>
              <li>
                <p>“Every word seems important. I don’t know what to cut.”</p>
              </li>
              <li>
                <p>“Always striving at all times to keep to our promises.</p>
              </li>
              <li>
                <p>
                  “Connecting and communicating with all parties involved to
                  ensure alignment.”
                </p>
              </li>
              <li>
                <p>
                  “Innovating to keep us and our customers ahead of the industry
                  norm always.”
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="words">
        <div className="words_lettering">
          <div className="word_first">
            <h2>
              You deserve the <span>Right Partner</span>
              <br />
              Because you are our <span>Priority</span>
            </h2>
          </div>
          <div className="word_second">
            <h3>
              Shed the technical talk and be understood by your clients with a
              message that's clear as day
            </h3>
          </div>
          <div className="appointment">
            <Link to="contact">Book an appointment</Link>
          </div>
        </div>
        <div className="word_imaging">
          <img src={ship3} alt="simple message" />
        </div>
      </section>

      <section className="service">
        <div className="service_main">
          <h1>
            One stop place for your <span>Maritime & Engineering</span> solution
            for your business
          </h1>
        </div>

        <div className="service_list">
          <div className="services">
            <div className="service_main">
              <h2>GENERAL CONSULTANCY SERVICES</h2>
            </div>
            <div className="service_words">
              <ul>
                <li>
                  <p>CLIENT REPRESENTATION</p>
                </li>
                <li>
                  <p>TECHNICAL BID EVALUATIONS</p>
                </li>
                <li>
                  <p>DETAILED DESIGN AND ANALYSIS</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="services">
            <div className="service_main">
              <h2>MARINE INSURANCE SURVEYS</h2>
            </div>
            <div className="service_words">
              <ul>
                <li>
                  <p>DAMAGE TO HULL AND MACHINERY</p>
                </li>
                <li>
                  <p>MARINE WARRANTY SURVEYS</p>
                </li>
                <li>
                  <p>CLAIMS ASSESSMENT AND LOSS ADJUSTMENT </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="services">
            <div className="service_main">
              <h2>MARINE TRANSPORTATION AND HEAVY LIFTS</h2>
            </div>
            <div className="service_words">
              <ul>
                <li>
                  <p>MARINE WARRANTY APPROVAL FOR HEAVY LIFT LOAD OUTS </p>
                </li>
                <li>
                  <p>HEAVY LIFT EVALUATION AND CRANE SUITABILITY STUDIES </p>
                </li>
                <li>
                  <p> MOTION RESPONSE AND STABILITY EVALUATIONS</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="appoint">
          <p>
            <Link to="services">Explore All of Our Marketing Services</Link>
          </p>
        </div>
      </section>

      <section className="business">
        <div className="business_content">
          <div className="business_main">
            <h2>We’ve helped hundreds of businesses grow </h2>
          </div>
          <div className="business_sub">
            <p>
              Becoming a global company providing innovative and sustainable
              maritime solutions, products and services to the offshore, marine
              and energy industries.
            </p>
          </div>
        </div>
        <div className="businesses">
          <div className="item">
            <img src={logo1} alt="logo" />
          </div>
          <div className="item">
            <img src={logo2} alt="logo" />
          </div>
          <div className="item">
            <img src={logo3} alt="logo" />
          </div>
          <div className="item">
            <img src={logo4} alt="logo" />
          </div>
          <div className="item">
            <img src={logo6} alt="logo" />
          </div>
          <div className="item">
            <img src={logo7} alt="logo" />
          </div>
          <div className="item">
            <img src={logo8} alt="logo" />
          </div>
          <div className="item">
            <div className="img">
              <img src={logo5} width={10} alt="logo" />
            </div>
          </div>
        </div>
      </section>

      <section className="booking">
        <div className="booking_img">
          <img src={consultant} alt="booking image" />
        </div>
        <div className="booking_lettering">
          <div className="booking_main">
            <h1>
              Gain more <span>insight</span> with the right Partner working with
              you.
            </h1>
          </div>
          <div className="appoint">
            <p>
              <Link to="contact">Book an appointment</Link>
            </p>
          </div>
        </div>
      </section>
      <section className="contact">
        <Email />
      </section>
    </div>
  );
};

export default Home;
