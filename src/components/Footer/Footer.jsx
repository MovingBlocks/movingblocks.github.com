import React, { useMemo } from "react";
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

function Footer() {
  const footerIconSize = useMemo(() => ({ size: "2.5em" }), []);
  return (
    <footer className="mt-auto">
      <Container className="footer">
        <Row className="justify-content-center">
          <Col md="6" className="text-center">
            <h5>
              <span> The Terasology Foundation</span>
            </h5>
            <h6 className="text-muted">
              {`Licensed under: `}
              <a
                className="text-success"
                href="https://www.apache.org/licenses/LICENSE-2.0"
              >
                Apache 2.0
              </a>
            </h6>
          </Col>
          <Col lg="6" md="4">
            <Row className="justify-content-center">
              <div className="mr-1">
                <a href="https://forum.terasology.org/">
                  <div className="gooey-icon" />
                </a>
              </div>
              <div>
                <IconContext.Provider value={footerIconSize}>
                  <a
                    className="github-icon-color"
                    href="https://github.com/MovingBlocks/Terasology"
                  >
                    <FaGithubSquare />
                  </a>
                </IconContext.Provider>
              </div>
              <div>
                <IconContext.Provider value={footerIconSize}>
                  <a
                    className="facebook-icon-color"
                    href="https://www.facebook.com/Terasology"
                  >
                    <FaFacebookSquare />
                  </a>
                </IconContext.Provider>
              </div>
              <div>
                <IconContext.Provider value={footerIconSize}>
                  <a
                    className="twitter-icon-color"
                    href="https://twitter.com/terasology"
                  >
                    <FaTwitterSquare />
                  </a>
                </IconContext.Provider>
              </div>
              <div>
                <IconContext.Provider value={footerIconSize}>
                  <a
                    className="discord-icon-color"
                    href="https://discord.gg/terasology"
                  >
                    <FaDiscord />
                  </a>
                </IconContext.Provider>
              </div>
              <div>
                <IconContext.Provider value={footerIconSize}>
                  <a
                    className="youtube-icon-color footericon"
                    href="https://www.youtube.com/user/blockmaniaTV"
                  >
                    <FaYoutubeSquare />
                  </a>
                </IconContext.Provider>
              </div>
              <div>
                <IconContext.Provider value={footerIconSize}>
                  <a
                    className="reddit-icon-color "
                    href="https://reddit.com/r/Terasology"
                  >
                    <FaRedditSquare />
                  </a>
                </IconContext.Provider>
              </div>
              <div>
                <IconContext.Provider value={footerIconSize}>
                  <a
                    className="ml-2  mt-2 patreon-icon-color"
                    href="https://www.patreon.com/Terasology"
                  >
                    <FaPatreon />
                  </a>
                </IconContext.Provider>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
