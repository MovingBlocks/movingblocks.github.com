import React from "react";
import { Row, Col } from "reactstrap";
import "./About.css";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const About = (props) => {
  const data = useStaticQuery(graphql`
    query myImages {
      historyImg: file(relativePath: { eq: "images/3.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      modding: file(relativePath: { eq: "images/9.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      community: file(relativePath: { eq: "images/8.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  return (
    <div className="about">
      <div className="about_bg">
        <div className="about__bg-overlay">
          <Row className="justify-content-center">
            <Col md="10" className="mt-5">
              <h1>Terasology</h1>
              <p className="mt-5">
                {" "}
                An open source voxel world born from a Minecraft-inspired tech
                demo
                <br />
                Imagine the possibilities!
              </p>
              <a
                href="https://github.com/Terasology/terasology.github.io"
                className="btn btn-light btn-lg mt-5 px-5 font-weight-bold "
              >
                Find out More
              </a>
            </Col>
          </Row>
        </div>
      </div>
      <section className="about__details py-5 mt-6e">
        <Row className="justify-content-center">
          <Col md="8">
            <h2 className="mb-5 text-center">About Us</h2>
            <p className="text-center">
              The Terasology project was and is becoming a stable platform for
              various types of gameplay settings in a voxel world. The creators
              and maintainers are a diverse mix of software developers,
              designers, game testers, graphic artists, and musicians. We
              encourage others to join
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            <Row className="mt-6e">
              <Col lg="5" className="pt-5">
                <GatsbyImage
                  image={data.historyImg.childImageSharp.gatsbyImageData}
                  style={{ height: "100%" }}
                />
              </Col>
              <Col lg="7">
                <h3 className="mb-3 mr-4">History</h3>
                <p className="text-justify">
                  Founded in 2011 by Benjamin "Begla" Glatzel while researching
                  procedural terrain generation and effective rendering
                  techniques, He succeded in creating a minecraft like demo From
                  the ground up, Terasology was built to be a super hackable and
                  modular game. We host a large number of modules under the
                  Terasology organization and many more which are maintained by
                  individual enthusiasts. We welcome new ideas, both crazy and
                  well thought-out for modules and game extensions from anyone
                  and everyone, so feel free to talk to us on our{" "}
                  <a
                    className="text-success font-weight-bold"
                    href="https://discordapp.com/invite/Terasology"
                  >
                    Discord
                  </a>{" "}
                  or IRC (#terasology on Freenode).
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            <Row className="mt-6e">
              <Col lg="7" md={{ order: 2 }}>
                <h3 className="mb-3  mr-4">Modding API</h3>
                <p className="text-justify">
                  Terasology's engine uses a whitelisting approach to expose an
                  API for modules using two primary methods and a rarely needed
                  third one:
                </p>
                <ul>
                  <li>Classes or packages marked with the @API annotation</li>
                  <li>
                    Classes or packages in the basic whitelist defined in
                    ExternalApiWhitelist.java
                  </li>
                  <li>
                    Rarely blocks of code in the engine may be hit in a way
                    requiring use of AccessController.doPrivileged(...) usually
                    module authors do not need to worry about this but once in a
                    while it could explain something quirky
                  </li>
                </ul>
                <div className="text-center">
                  <a
                    className="font-weight-bold btn btn-lg btn-success mt-5"
                    href="https://github.com/MovingBlocks/Terasology/wiki/Modding-API"
                  >
                    Learn More
                  </a>
                </div>
              </Col>
              <Col lg="5" md={{ order: 1 }} className="pt-5">
                <GatsbyImage
                  image={data.modding.childImageSharp.gatsbyImageData}
                  style={{ height: "100%" }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            <Row className="mt-6e">
              <Col lg="5" className="pt-5">
                <GatsbyImage
                  image={data.community.childImageSharp.gatsbyImageData}
                  style={{ height: "100%" }}
                />
              </Col>
              <Col lg="7">
                <h3 className="mb-3 text-right mr-4">Terasology Community</h3>
                <p className="text-justify">
                  The creators and maintainers are a diverse mix of software
                  developers, designers, game testers, graphic artists,
                  musicians and open source loving high schoolers. We encourage
                  and appreciate contributions from everybody, and try to be as
                  warm and welcoming as possible to newcomers. If you have any
                  questions or if you just want to chat use this invite link for
                  our{" "}
                  <a
                    className="text-success font-weight-bold"
                    href="https://discordapp.com/invite/Terasology"
                  >
                    Discord
                  </a>
                  , or check out our IRC channel #terasology on Freenode. And
                  don't worry about missing something by joining only one of
                  those, as we have everything bridged.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default About;
