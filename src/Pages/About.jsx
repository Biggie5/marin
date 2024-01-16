import React from "react";
import { Link } from "react-router-dom";
import { mission, service, values, vision } from "../constant/images";
import "../style/About.scss";

const About = () => {
  return (
    <div>
      <section className="About_main">
        <section className="about_home">
          <div className="about_lettering">
            <div className="about_header">
              <h1>About Us</h1>
            </div>
            <div className="about_sub">
              <p>We believe everyone should be heard and understood.</p>
            </div>
            <div className="about_link">
              <p>
                <Link to="contact">Book an appointment</Link>
              </p>
            </div>
          </div>

          <div className="about_column">
            <div className="content">
              <span></span>
              <p>COLLABORATION</p>
            </div>
            <div className="content">
              <span></span>
              <p> RESPECT</p>
            </div>
            <div className="content">
              <span></span>
              <p>CARE</p>
            </div>
          </div>
        </section>

        <section className="about_words">
          <div className="about_lettering">
            <div className="about_head">
              <h1>
                WHO WE ARE
                <br />
                <span></span>
              </h1>
            </div>
            <div className="about_sub">
              <p>
                Marin Oil and Gas is a Nigerian marine services company founded
                in 2023 to provide marine and engineering consultancy and
                surveying services to the shipping and offshore industries. Our
                clients include oil companies, drilling & offshore contractors,
                ship owners and charterers together with their legal and
                insurance interests. A staff of highly qualified and experienced
                Master Mariners and Marine Engineers provide a unique
                combination of professional expertise and consultancy to our
                numerous clients. <br />
                <br />
                In maritime transportation and offshore industry, the Company
                acts as marine consultant, transporter and/or marine insurance
                warranty surveyor. We advise our clients upon approving the
                load-out, towage and installation of project cargoes.
                Installation of steel jackets and their topsides, concrete
                structures, floating production systems and mobile offshore
                drilling units and all other marine transport related services.{" "}
                <br />
                <br />
                In the shipping industry the Company provides a wide range of
                consultancy, supply and surveying services. These include
                salvage, wreck removal feasibility and operations, collision
                investigations, damage assessment to port installations, cargo
                damage surveys, marine pollution assessment, condition surveys
                and charter of several marine equipment
              </p>
            </div>
          </div>
          {/* <div className="about_img">
            <img src={service} alt="about_img" />
          </div> */}
        </section>

        <section className="about_mission">
          <div className="about_lettering">
            <div className="about_head">
              <h1>
                WHAT WE STAND FOR
                <br />
                <span></span>
              </h1>
            </div>
          </div>

          <div className="about_cores">
            <div className="cores_content">
              <div className="core_img">
                <img src={mission} alt="mission img" />
              </div>
              <div className="core_lettering">
                <h1>OUR MISSION</h1>
                <p>
                  Becoming a global company providing innovative and sustainable
                  maritime solutions, products and services to the offshore,
                  marine and energy industries.
                </p>
              </div>
            </div>

            <div className="cores_content">
              <div className="core_img">
                <img src={vision} alt="vision img" />
              </div>
              <div className="core_lettering">
                <h1>OUR VISION</h1>
                <p>
                  To be the marine company of choice in the industry, leader in
                  the industry and invaluable asset to our clients and partners.
                  We will be an organization that evaluates and capitalizes on
                  our strengths, takes advantage of opportunities, and fosters a
                  continually learning environment to stay relevant, effective
                  and efficient to our numerous clients, partners and everyone
                  involved.
                </p>
              </div>
            </div>

            <div className="cores_content">
              <div className="core_img">
                <img src={values} alt="value img" />
              </div>
              <div className="core_lettering">
                <h1>OUR VALUES</h1>
                <ul>
                  <li>
                    <p>
                      <span>OUR WORD, OUR BOND:</span> always striving at all
                      times to keep to our promises.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>WE CARE:</span> about our colleagues, our clients,
                      and our environment
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>WE COLLABORATE:</span> by connecting and
                      communicating with all parties involved to ensure
                      alignment.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>WE CHALLENGE:</span> by innovating to keep us and
                      our customers ahead of the industry norm always
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>RESPECT:</span> we respect every individual in our
                      organization by not diving into their private life. We
                      ensure confidentiality of information between our clients
                      and partners.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="about_md">
          <div className="md_word">
            <p>
              “I would like to appreciate all our clients and partners for
              entrusting Marin Oil and Gas to provide them with our services and
              support. In an ever-changing environment and industry, adaptation
              and vision are required in order to compete at the highest
              industry levels and standards. Marin Oil and Gas believes so much
              in excellent service delivery, good customer relationship and time
              consciousness to compete in the ever-growing marine industry.
              Marin Oil and Gas is a brand fully sophisticated with a workforce
              of industry knowledge, experienced personnel, and innovative
              equipment. By providing quality services, dedication to our
              clients, in tandem with the opportunities offered by Nigeria’s
              ever growing industry and peoples, Marin Oil and Gas is able to be
              a leading marine and engineering consulting company from within
              Nigeria and to the global scene”
            </p>
          </div>
          <div className="md_position">
            <h3>FROM THE MD’S DESK…</h3>
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
      </section>
    </div>
  );
};

export default About;
