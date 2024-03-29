import React from "react";
import { Link } from "gatsby";
import { Button } from "reactstrap";

const kebabCase = require("lodash.kebabcase");

function PostTags({ tags, type }) {
  return (
    <div className="post-tag-container">
      {tags && (
        <Link
          key={tags}
          style={{ textDecoration: "none" }}
          to={`/${type}/?keywords=&filter=${kebabCase(tags)}`}
        >
          <Button color="primary" size="lg">
            {tags}
          </Button>
        </Link>
      )}
    </div>
  );
}

export default PostTags;
