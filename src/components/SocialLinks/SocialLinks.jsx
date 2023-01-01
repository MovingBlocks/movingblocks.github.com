import React, { useMemo } from "react";
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

function SocialLinks({ title, excerpt, path, mobile }) {
  const url = urljoin(config.siteUrl, config.pathPrefix, path);

  const iconSize = useMemo(() => ({ size: mobile ? 36 : 48 }), [mobile]);
  return (
    <div className="social-links">
      <RedditShareButton url={url} title={title}>
        <IconContext.Provider value={iconSize}>
          <div className="reddit-icon-color">
            <FaReddit />
          </div>
        </IconContext.Provider>
      </RedditShareButton>
      <TwitterShareButton url={url} title={title}>
        <IconContext.Provider value={iconSize}>
          <div className="twitter-icon-color">
            <FaTwitter />
          </div>
        </IconContext.Provider>
      </TwitterShareButton>
      <FacebookShareButton url={url} quote={excerpt}>
        <IconContext.Provider value={iconSize}>
          <div className="facebook-icon-color">
            <FaFacebook />
          </div>
        </IconContext.Provider>
      </FacebookShareButton>
      <LinkedinShareButton
        url={url}
        title={title}
        description={excerpt}
      >
        <IconContext.Provider value={iconSize}>
          <div className="linkedin-icon-color">
            <FaLinkedin />
          </div>
        </IconContext.Provider>
      </LinkedinShareButton>
      <TelegramShareButton url={url}>
        <IconContext.Provider value={iconSize}>
          <div className="telegram-icon-color">
            <FaTelegram />
          </div>
        </IconContext.Provider>
      </TelegramShareButton>
    </div>
  );
}

export default SocialLinks;
