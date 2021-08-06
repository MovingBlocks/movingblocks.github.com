import React from "react";
import { IconContext } from "react-icons";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
} from "react-share";
import {
  FaReddit,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import urljoin from "url-join";
import config from "../../../data/SiteConfig";

const SocialLinks = ({ postNode, postPath, mobile }) => {
  const post = postNode.frontmatter;
  const url = urljoin(config.siteUrl, config.pathPrefix, postPath);
  const iconSize = mobile ? 36 : 48;

  return (
    <div className="social-links">
      <RedditShareButton url={url} title={post.title}>
        <IconContext.Provider value={{ size: iconSize }}>
          <div className="reddit-icon-color">
            <FaReddit />
          </div>
        </IconContext.Provider>
      </RedditShareButton>
      <TwitterShareButton url={url} title={post.title}>
        <IconContext.Provider value={{ size: iconSize }}>
          <div className="twitter-icon-color">
            <FaTwitter />
          </div>
        </IconContext.Provider>
      </TwitterShareButton>
      <FacebookShareButton url={url} quote={postNode.excerpt}>
        <IconContext.Provider value={{ size: iconSize }}>
          <div className="facebook-icon-color">
            <FaFacebook />
          </div>
        </IconContext.Provider>
      </FacebookShareButton>
      <LinkedinShareButton
        url={url}
        title={post.title}
        description={postNode.excerpt}
      >
        <IconContext.Provider value={{ size: iconSize }}>
          <div className="linkedin-icon-color">
            <FaLinkedin />
          </div>
        </IconContext.Provider>
      </LinkedinShareButton>
      <TelegramShareButton url={url}>
        <IconContext.Provider value={{ size: iconSize }}>
          <div className="telegram-icon-color">
            <FaTelegram />
          </div>
        </IconContext.Provider>
      </TelegramShareButton>
    </div>
  );
};

export default SocialLinks;
