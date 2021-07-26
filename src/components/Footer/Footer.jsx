import React from "react";
import { IconContext } from "react-icons";
import { Container, Row, Col } from "reactstrap";
import {
  FaGithubSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaDiscord,
  FaYoutubeSquare,
  FaRedditSquare,
  FaPatreon,
} from "react-icons/fa";
const Footer = () => (
  <footer className="mt-auto">
    <Container className="footer">
      <Row className="justify-content-center">
        <Col md="6" className="text-center">
          <h5>
            <span> The Terasology Foundation</span>
          </h5>
          <h6>
            {" "}
            Licensed under:&nbsp;
            <a
              className="link"
              href="https://www.apache.org/licenses/LICENSE-2.0"
            >
              Apache 2.0
            </a>
          </h6>
        </Col>

        <Col md="6" className="text-center">
          <IconContext.Provider value={{ size: "2.5em" }}>
            <a
              className="link"
              href="https://github.com/MovingBlocks/Terasology"
            >
              <FaGithubSquare />
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "2.5em" }}>
            <a className="link" href="https://www.facebook.com/Terasology">
              <FaFacebookSquare />
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "2.5em" }}>
            <a className="link" href="https://twitter.com/terasology">
              <FaTwitterSquare />
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "2.5em" }}>
            <a className="link" href="https://discord.gg/terasology">
              <FaDiscord />
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "2.5em" }}>
            <a
              className="link "
              href="https://www.youtube.com/user/blockmaniaTV"
            >
              <FaYoutubeSquare />
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "2.5em" }}>
            <a className="link " href="https://reddit.com/r/Terasology">
              <FaRedditSquare />
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "2.2em" }}>
            <a className="link ml-2" href="https://www.patreon.com/Terasology">
              <FaPatreon />
            </a>
          </IconContext.Provider>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
