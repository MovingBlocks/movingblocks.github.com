import React from "react";
import { Row, Col } from "reactstrap";
import { graphql, useStaticQuery } from "gatsby";
import { BgImage } from "gbimage-bridge";

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
            <div className=" my-4">
              <div className="home-underline"></div>
            </div>
           
            <p className="text-center">
              The Terasology project was and is becoming a stable platform for
              various types of gameplay settings in a voxel world. The creators
              and maintainers are a diverse mix of software developers,
              designers, game testers, graphic artists, and musicians. We
              encourage others to join
            </p>
           
            
          </Col>
        </Row>

        <Row>
          <Col md="12">
            <BgImage image={data.historyImg.childImageSharp.gatsbyImageData}>
              <div className="left-overlay_about_content">
                <Col md="5">
                  <h3 className="mb-3  mr-4 text-white">History</h3>
                  <p className="text-justify text-white font-weight-about">
                    Founded in 2011 by Benjamin "Begla" Glatzel while
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
                    </a>{" "}
                    or IRC (#terasology on Freenode).
                  </p>
                </Col>
              </div>
            </BgImage>
          </Col>
          <Col md="12">
            <BgImage image={data.modding.childImageSharp.gatsbyImageData}>
              <div className="right-overlay_about_content">
                <Row>
                  <Col className="empty-about-content" md="7"></Col>
                  <Col md="5" className="text-white float-right ">
                    <div className="ml-4 mr-4 ">
                      <h3 className="mb-3 text-white">Modding API</h3>
                      <p className="text-justify font-weight-about">
                        Terasology's engine uses a whitelisting approach to
                        expose an API for modules using two primary methods and
                        a rarely needed third one:
                      </p>
                      <ul>
                        <li className="font-weight-about">
                          Classes or packages marked with the @API annotation
                        </li>
                        <li className="font-weight-about">
                          Classes or packages in the basic whitelist defined in
                          ExternalApiWhitelist.java
                        </li>
                        <li className="font-weight-about">
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
            </BgImage>
          </Col>
          <Col md="12">
            <BgImage image={data.community.childImageSharp.gatsbyImageData}>
              <div className="left-overlay_about_content">
                <Col md="5" className="text-white">
                  <h3 className="mb-3  mr-4">Terasology Community</h3>
                  <p className="text-justify font-weight-about">
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
                    , or check out our IRC channel #terasology on Freenode. And
                    don't worry about missing something by joining only one of
                    those, as we have everything bridged.
                  </p>
                </Col>
              </div>
            </BgImage>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default About;
