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
const Footer = () => {
  const footerIconSize = "2.5em"
  return(
    <footer className="mt-auto">
    <Container className="footer">
      <Row className="justify-content-center">
        <Col md="6" className="text-center">
          <h5>
            <span> The Terasology Foundation</span>
          </h5>
          <h6 className="text-muted">
            Licensed under: {"  "}
              <a
              className="link text-success"
              href="https://www.apache.org/licenses/LICENSE-2.0"
            >
              Apache 2.0
            </a>
          </h6>
        </Col>

        <Col md="6" className="text-center">
          <IconContext.Provider value={{ size: footerIconSize }}>
            <a
              className="link text-dark"
              href="https://github.com/MovingBlocks/Terasology"
            >
              <FaGithubSquare />
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: footerIconSize}}>
            <a
              className="link facebook-icon-color"
              href="https://www.facebook.com/Terasology"
            >
              <FaFacebookSquare />
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: footerIconSize, }}>
            <a
              className="link twitter-icon-color"
              href="https://twitter.com/terasology"
            >
              <FaTwitterSquare />
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: footerIconSize}}>
            <a
              className="link discord-icon-color"
              href="https://discord.gg/terasology"
            >
              <FaDiscord />
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: footerIconSize }}>
            <a
              className="link text-danger"
              href="https://www.youtube.com/user/blockmaniaTV"
            >
              <FaYoutubeSquare />
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: footerIconSize}}>
            <a
              className="link reddit-icon-color"
              href="https://reddit.com/r/Terasology"
            >
              <FaRedditSquare />
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: footerIconSize }}>
            <a
              className="link ml-2 patreon-icon-color"
              href="https://www.patreon.com/Terasology"
            >
              <FaPatreon />
            </a>
          </IconContext.Provider>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}
   
 

export default Footer;
