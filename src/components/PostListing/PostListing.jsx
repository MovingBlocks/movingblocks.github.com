import React from "react";
import { Row, Col } from "reactstrap";
import moment from "moment";

import Cards from "../Cards/Cards";

function PostListing({ prefix, postList }) {
  return (
    <Col lg="12" className="card-spacing">
      <Row className="justify-content-center">
        {postList.map(({title, cover, tags, excerpt, author, path, date, posttype}) => (
          <Cards
            title={title}
            path={path}
            cover={cover}
            tags={tags}
            excerpt={excerpt}
            author={author}
            date={
              date ? moment(date).format("MMMM DD, YYYY") : undefined
            }
            type={posttype}
          />
        ))}
      </Row>
    </Col>
  );
}

export default PostListing;
