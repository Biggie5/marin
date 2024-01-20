import React from "react";
import "../style/service.scss";
import { Link } from "react-router-dom";
import {
  service,
  clock,
  item1,
  item10,
  item11,
  item12,
  item13,
  item14,
  item15,
  item16,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
} from "../constant/images";

const Services = () => {
  return (
    <div className="service_main">
      <section className="service_home">
        <div className="service_lettering">
          <div className="service_heading">
            <h2>Consultancy & Surveying Services</h2>
          </div>

          <div className="service_head_main">
            <h1>Providing innovative and sustainable maritime solutions</h1>
          </div>

          <div className="service_sub">
            <p>
              we respect every individual in our organization by not diving into
              their private life. We ensure confidentiality of information
              between our clients and partners and innovations to keep us and
              our customers ahead of the industry norm.
            </p>
          </div>
        </div>
        {/* <div className="service_img">
          <img src={service} alt="service" />
        </div> */}
      </section>

      <section className="service_offer">
        <div className="service_heading_main">
          <h1>
            What we <span>OFFER</span> to our customers.
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
                  <p>FEASIBILITY STUDIES </p>
                </li>
                <li>
                  <p>DETAILED DESIGN AND ANALYSIS</p>
                </li>
                <li>
                  <p>THIRD PARTY VERIFICATION</p>
                </li>
                <li>
                  <p>RISK ANALYSIS AND SAFETY CASE STUDIES </p>
                </li>
                <li>
                  <p>PREPARATION OF MANUALS FOR MARINE PROCEDURES</p>
                </li>
                <li>
                  <p>MARINE LITIGATION</p>
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
                <li>
                  <p>DAMAGE TO AND LOSS OF CARGO SURVEYS </p>
                </li>
                <li>
                  <p>PERSONAL INJURY INVESTIGATIONS AND CLAIMS </p>
                </li>
                <li>
                  <p>CONDITION SURVEYS </p>
                </li>
                <li>
                  <p>
                    DAMAGE TO OFFSHORE INSTALLATIONS AND PIPES, BARGES, DOCKS
                    AND CRANES
                  </p>
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
                <li>
                  <p> STRUCTURAL ANALYSES OF BARGES AND HEAVY LIFT VESSELS</p>
                </li>
                <li>
                  <p>
                    REVIEW AND SUITABILITY SURVEYS OF MARINE UNITS FOR HEAVY
                    LIFTS
                  </p>
                </li>
                <li>
                  <p>
                    MARINE WARRANTY APPROVAL FOR TRANSPORTATION AND HEAVY LIFTS
                  </p>
                </li>
                <li>
                  <p>
                    SEA FASTENING DESIGN AND MARINE WARRANTY APPROVAL OF SEA
                    FASTENINGS
                  </p>
                </li>
                <li>
                  <p>
                    JACKET STRENGTH ANALYSES FOR TRANSPORT, LOAD-OUT, LIFTING
                    AND LAUNCHING
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="services">
            <div className="service_main">
              <h2>MARINE SURVEYS</h2>
            </div>
            <div className="service_words">
              <ul>
                <li>
                  <p>
                    MARINE LITIGATION SHIP AND BARGE CONDITION AND SUITABILITY
                  </p>
                </li>
                <li>
                  <p>TOTAL LOSS AND SEAWORTHINESS INVESTIGATIONS</p>
                </li>
                <li>
                  <p>MARINE SAFETY AUDITS</p>
                </li>
                <li>
                  <p>SURVEYS FOR VALUATIONS</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="services">
            <div className="service_main">
              <h2>SHIPPING</h2>
            </div>
            <div className="service_words">
              <ul>
                <li>
                  <p>MARINE AND MARINE ENGINEERING SUPER INTENDENCY </p>
                </li>
                <li>
                  <p>VESSEL DESIGN AND MODIFICATION</p>
                </li>
                <li>
                  <p>NEW BUILD SUPERVISION</p>
                </li>
                <li>
                  <p>OIL POLLUTION INVESTIGATIONS AND CLAIMS HANDLING </p>
                </li>
                <li>
                  <p>VESSEL SALE AND PURCHASE SURVEYS</p>
                </li>
                <li>
                  <p>STRUCTURAL AND STABILITY ANALYSES</p>
                </li>
                <li>
                  <p>DRAFT SURVEYS</p>
                </li>
                <li>
                  <p>MANAGEMENT AND OPERATIONS AUDITS</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="services">
            <div className="service_main">
              <h2>TOWAGE</h2>
            </div>
            <div className="service_words">
              <ul>
                <li>
                  <p>RECOMMENDATIONS FOR TOWAGE PREPARATIONS AND PROCEDURES</p>
                </li>
                <li>
                  <p> TOWING VESSEL SUITABILITY SURVEYS</p>
                </li>
                <li>
                  <p>SUPERVISION OF TOWAGE PREPARATIONS</p>
                </li>
                <li>
                  <p>PRE-TOWAGE AND POST-TOWAGE INSPECTIONS</p>
                </li>
                <li>
                  <p>BOLLARD PULL TEST SUPERVISION</p>
                </li>
                <li>
                  <p>MARINE WARRANTY APPROVAL FOR TOWAGE OF SHIPS AND BARGES</p>
                </li>
                <li>
                  <p>PROVISION OF TOW MASTERS</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="services">
            <div className="service_main">
              <h2>MOBILE OFFSHORE DRILLING RIG</h2>
            </div>
            <div className="service_words">
              <ul>
                <li>
                  <p>
                    MARINE LITIGATION FEASIBILITY STUDIES FOR OFFSHORE
                    OPERATIONS
                  </p>
                </li>
                <li>
                  <p>PREPARATION OR APPROVAL OF MARINE PROCEDURES </p>
                </li>
                <li>
                  <p>
                    LOCATION STUDIES AND WARRANTY APPROVALS FOR OPERATIONS ON
                    LOCATION
                  </p>
                </li>
                <li>
                  <p>
                    RECOMMENDATIONS AND SUPERVISION OF PREPARATIONS FOR OCEAN
                    TOWS
                  </p>
                </li>
                <li>
                  <p>
                    RECOMMENDATIONS FOR TRANSPORT ON SEMI-SUBMERSIBLE CARRIERS
                  </p>
                </li>
                <li>
                  <p>MARINE WARRANTY APPROVAL FOR OCEAN TOW OR TRANSPORT</p>
                </li>
                <li>
                  <p>MARINE WARRANTY APPROVAL FOR RIG LOCATION MOVES </p>
                </li>
                <li>
                  <p>GENERAL CONDITION SURVEYS</p>
                </li>
                <li>
                  <p>DIRECTION AND SUPERVISION OF RIG LOCATION MOVES</p>
                </li>
                <li>
                  <p>PROVISION OF RIG MOVER</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services-pictures">
          <div className="service_main"></div>
          <div className="service_image">
            <ul>
              <li>
                <img src={item2} alt="service-image" />
              </li>
              <li>
                <img src={item1} alt="service-image" />
              </li>
              <li>
                <img src={item3} alt="service-image" />
              </li>
              <li>
                <img src={item4} alt="service-image" />
              </li>
              <li>
                <img src={item5} alt="service-image" />
              </li>
              <li>
                <img src={item6} alt="service-image" />
              </li>
              <li>
                <img src={item7} alt="service-image" />
              </li>
              <li>
                <img src={item8} alt="service-image" />
              </li>
              <li>
                <img src={item9} alt="service-image" />
              </li>
              <li>
                <img src={item10} alt="service-image" />
              </li>
              <li>
                <img src={item11} alt="service-image" />
              </li>
              <li>
                <img src={item12} alt="service-image" />
              </li>
              <li>
                <img src={item13} alt="service-image" />
              </li>
              <li>
                <img src={item14} alt="service-image" />
              </li>
              <li>
                <img src={item15} alt="service-image" />
              </li>
              <li>
                <img src={item16} alt="service-image" />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="service_process">
        <div className="process_img">
          <img src={clock} alt="process-images" />
        </div>
        <div className="process_lettering">
          <div className="process_head">
            <h1>Our Process</h1>
          </div>
          <div className="process_sub">
            <p>
              Here at Marin Oil & Gas, we’re certified in consultancy and
              engineering — we implore a winning framework and formula that
              helps businesses improve their strategies to connect them to
              audience, growing their businesses. We begin every project with a
              brand message guide to build the foundation for your business. We
              walk you through an in-depth interview using the winning framework
              to help you find clarity and words you can instantly use for your
              BUSINESS.
            </p>
          </div>
        </div>
      </section>

      <section className="service_ready">
        <div className="ready_main">
          <div className="ready_lettering">
            <h1> Ready to get your words right? </h1>
          </div>
          <div className="ready_link">
            <p>
              <Link to="contact">Let's talk</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
