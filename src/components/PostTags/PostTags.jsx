import React from "react";
import _ from "lodash";
import { Link } from "gatsby";
import { Button } from "reactstrap";

export default ({ tags, type }) => (
  <div className="post-tag-container">
    {tags &&
      tags.map(tag => (
        <Link
          key={tag}
          style={{ textDecoration: "none" }}
          to={`/${type}/?keywords=&filter=${_.kebabCase(tag)}`}
        >
          <Button color="primary" size="lg">{tag}</Button>
        </Link>
      ))}
  </div>
);
