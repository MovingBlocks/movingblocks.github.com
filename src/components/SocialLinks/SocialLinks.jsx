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
        <IconContext.Provider value={{ size: iconSize, color: "#ff4500" }}>
          <FaReddit />
        </IconContext.Provider>
      </RedditShareButton>
      <TwitterShareButton url={url} title={post.title}>
        <IconContext.Provider value={{ size: iconSize, color: "#1BAAE1" }}>
          <FaTwitter />
        </IconContext.Provider>
      </TwitterShareButton>
      <FacebookShareButton url={url} quote={postNode.excerpt}>
        <IconContext.Provider value={{ size: iconSize, color: "#3B5998" }}>
          <FaFacebook />
        </IconContext.Provider>
      </FacebookShareButton>
      <LinkedinShareButton
        url={url}
        title={post.title}
        description={postNode.excerpt}
      >
        <IconContext.Provider value={{ size: iconSize, color: "#4875B4" }}>
          <FaLinkedin />
        </IconContext.Provider>
      </LinkedinShareButton>
      <TelegramShareButton url={url}>
        <IconContext.Provider value={{ size: iconSize, color: "#00405d" }}>
          <FaTelegram />
        </IconContext.Provider>
      </TelegramShareButton>
    </div>
  );
};

export default SocialLinks