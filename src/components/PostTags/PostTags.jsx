import React from "react";
import _ from "lodash";
import { Link } from "gatsby";
import { Button } from "reactstrap";

const PostTags = ({ tags, type }) => (
  <div className="post-tag-container">
    {tags && 
        <Link
          key={tags}
          style={{ textDecoration: "none" }}
          to={`/${type}/?keywords=&filter=${_.kebabCase(tags.split(" ")[0])}`}
        >
          <Button color="primary" size="lg">{tags}</Button>
        </Link>
      }
  </div>
);

export default PostTags