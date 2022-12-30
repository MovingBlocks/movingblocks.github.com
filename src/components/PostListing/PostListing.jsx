import React from "react";
import { Row, Col } from "reactstrap";
import moment from "moment";

import Cards from "../Cards/Cards";

function PostListing({ prefix, postList }) {
  return (
    <Col lg="12" className="card-spacing">
      <Row className="justify-content-center">
        {
          postList.map((post) =>
            <Cards
              title={post.title}
              path={`${prefix}${post.path}`}
              cover={post.cover.childImageSharp}
              tags={post.tags}
              excerpt={post.excerpt}
              author={post.author}
              date={post.date ? moment(post.date).format("MMMM DD, YYYY") : undefined}
              type={post.posttype}
            />
          )
        }
      </Row>
    </Col>
  );
}

export default PostListing;
