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
  FaComments,
  FaPatreon,
} from "react-icons/fa";

const Footer = () => (
  <footer className="mt-auto">
    <Container className="footer">
      <Row>
        <Col md="3">
          <h5>The Terasology Foundation</h5>
        </Col>
        <Col md="3">
          <ul className="footer-nav">
            <li>
              <a className="link" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="link" href="/blog">
                Blog
              </a>
            </li>
            <li>
              <a className="link" href="/media">
                Media
              </a>
            </li>
            <li>
              <a className="link" href="/game">
                The Game
              </a>
            </li>
            <li>
              <a className="link" href="https://forum.terasology.org/">
                Forum
              </a>
            </li>
          </ul>
        </Col>
        <Col md="3">
          <ul className="footer-nav">
            <li>
              <a className="link" href="/modules">
                Modules
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://www.apache.org/licenses/LICENSE-2.0"
              >
                License
              </a>
            </li>
          </ul>
        </Col>
        <Col md="3">
          <h5>Get in touch:</h5>
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
              className="link"
              href="https://www.youtube.com/user/blockmaniaTV"
            >
              <FaYoutubeSquare />
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "2.5em" }}>
            <a className="link" href="https://reddit.com/r/Terasology">
              <FaRedditSquare />
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "2.5em" }}>
            <a
              className="link"
              href="http://webchat.freenode.net/?channels=terasology&uio=d4?channels=%23terasology&nick=Terasologist...&prompt=1&useUserListIcons=true"
            >
              <FaComments />
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
