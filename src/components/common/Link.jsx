import React from "react";
import { Link as InternalLink } from "gatsby";
import { FaExternalLinkAlt } from "react-icons/fa";

// See https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/#reminder-use-link-only-for-internal-links

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
function Link({
  children,
  to,
  activeClassName,
  partiallyActive,
  Indicator = FaExternalLinkAlt,
  ...other
}) {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <InternalLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </InternalLink>
    );
  }
  return (
    <a href={to} {...other}>
      {children}
      <Indicator
        style={{
          marginLeft: "0.5rem",
        }}
      />
    </a>
  );
}

export default Link;
