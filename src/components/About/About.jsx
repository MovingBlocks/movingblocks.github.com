import React from "react";
import { Row, Col } from "reactstrap";
import { withPrefix } from "gatsby";
import Section from "../Section";

function About() {
  return (
    <div className="about">
      <div className="about_bg">
        <div className="about__bg-overlay">
          <Row className="justify-content-center">
            <Col md="10" className="mt-5">
              <h1>Terasology</h1>
              <p className="mt-5">
                An open source voxel world born from a Minecraft-inspired tech
                demo
                <br />
                Imagine the possibilities!
              </p>

              <a
                href="https://github.com/MovingBlocks/Terasology"
                target="_blank"
                className="btn btn-light btn-lg mt-5 px-5 font-weight-bold"
                rel="noreferrer"
              >
                Find out More
              </a>
            </Col>
          </Row>
        </div>
      </div>
      <section className="py-5 mt-6">
        <Row className="justify-content-center">
          <Col md="8">
            <Section title="About Us">
              <p className="text-center">
                The Terasology project was and is becoming a stable platform for
                various types of gameplay settings in a voxel world. The
                creators and maintainers are a diverse mix of software
                developers, designers, game testers, graphic artists, and
                musicians. We encourage others to join
              </p>
            </Section>
          </Col>
        </Row>

        <Row>
          <Col md="12">
            <div
              className="with-bg-image"
              style={{ backgroundImage: `url(${withPrefix("/images/3.jpg")})` }}
            >
              <div className="left-overlay_about_content">
                <Col md="5" className="p-4">
                  <h3 className="text-white">History</h3>
                  <p className="text-justify text-white ">
                    Founded in 2011 by {`Benjamin "Begla" Glatzel`} while
                    researching procedural terrain generation and effective
                    rendering techniques, He succeded in creating a minecraft
                    like demo From the ground up, Terasology was built to be a
                    super hackable and modular game. We host a large number of
                    modules under the Terasology organization and many more
                    which are maintained by individual enthusiasts. We welcome
                    new ideas, both crazy and well thought-out for modules and
                    game extensions from anyone and everyone, so feel free to
                    talk to us on our{" "}
                    <a
                      className="text-white font-weight-bold"
                      href="https://discordapp.com/invite/Terasology"
                    >
                      Discord
                    </a>
                    .
                  </p>
                </Col>
              </div>
            </div>
          </Col>
          <Col md="12">
            <div
              className="with-bg-image"
              style={{ backgroundImage: `url(${withPrefix("/images/9.jpg")})` }}
            >
              <div className="right-overlay_about_content">
                <Row>
                  <Col className="empty-about-content" md="7" />
                  <Col md="5" className="text-white float-right ">
                    <div className="ml-2 mr-4 ">
                      <h3 className="ml-2 mb-3 text-white">Modding API</h3>
                      <p className="ml-2 mr-3 text-justify ">
                        {`Terasology's`} engine uses a whitelisting approach to
                        expose an API for modules using two primary methods and
                        a rarely needed third one:
                      </p>
                      <ul>
                        <li>
                          Classes or packages marked with the @API annotation
                        </li>
                        <li>
                          Classes or packages in the basic whitelist defined in
                          ExternalApiWhitelist.java
                        </li>
                        <li>
                          Rarely blocks of code in the engine may be hit in a
                          way requiring use of
                          AccessController.doPrivileged(...) usually module
                          authors do not need to worry about this but once in a
                          while it could explain something quirky
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col md="12">
            <div
              className="with-bg-image"
              style={{ backgroundImage: `url(${withPrefix("/images/8.jpg")})` }}
            >
              <div className="left-overlay_about_content">
                <Col md="5" className="text-white p-4">
                  <h3 className="mb-3  mr-4">Terasology Community</h3>
                  <p className="text-justify ">
                    The creators and maintainers are a diverse mix of software
                    developers, designers, game testers, graphic artists,
                    musicians and open source loving high schoolers. We
                    encourage and appreciate contributions from everybody, and
                    try to be as warm and welcoming as possible to newcomers. If
                    you have any questions or if you just want to chat use this
                    invite link for our{" "}
                    <a
                      className="text-white font-weight-bolder"
                      href="https://discordapp.com/invite/Terasology"
                    >
                      Discord
                    </a>
                    .
                  </p>
                </Col>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default About;
